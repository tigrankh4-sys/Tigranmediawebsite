# Lambda Rate Limiting Migration

The current `lambda/contact.mjs` uses an in-memory `Map` for rate limiting.
This is **broken** under Lambda's execution model:

- Each cold start creates a fresh Map.
- Concurrent invocations have separate Maps.
- An attacker with 50 parallel requests bypasses the 5/min limit.

## Recommended fix: API Gateway throttling

The simplest, infrastructure-only fix. No code change needed.

In API Gateway → Lambda function URL or HTTP API:

1. Open AWS Console → Lambda → `tigranmedia-contact` (or your function name)
2. Configuration → Function URL → Edit
3. Throttling section: set **Burst limit: 10**, **Rate limit: 5/sec**

Or via AWS WAF rate-based rule attached to CloudFront:

```bash
aws wafv2 create-web-acl --name tigranmedia-contact-ratelimit \
  --scope CLOUDFRONT --region us-east-1 \
  --default-action Allow={} \
  --rules '[{
    "Name": "ContactRateLimit",
    "Priority": 1,
    "Action": { "Block": {} },
    "Statement": {
      "RateBasedStatement": {
        "Limit": 100,
        "AggregateKeyType": "IP",
        "ScopeDownStatement": {
          "ByteMatchStatement": {
            "FieldToMatch": { "UriPath": {} },
            "PositionalConstraint": "STARTS_WITH",
            "SearchString": "/api/contact",
            "TextTransformations": [{ "Priority": 0, "Type": "NONE" }]
          }
        }
      }
    },
    "VisibilityConfig": { "SampledRequestsEnabled": true, "CloudWatchMetricsEnabled": true, "MetricName": "ContactRateLimit" }
  }]'
```

## Alternative: DynamoDB-backed rate limit (in code)

If you prefer code-level control, replace the in-memory `Map` with DynamoDB:

```js
// At top of contact.mjs
import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
const ddb = new DynamoDBClient({});
const TABLE = 'tigranmedia-rate-limit';

async function checkRate(ip) {
  const now = Math.floor(Date.now() / 1000);
  const ttl = now + 60; // 1 minute
  try {
    const res = await ddb.send(new UpdateItemCommand({
      TableName: TABLE,
      Key: { ip: { S: ip } },
      UpdateExpression: 'ADD #c :one SET #t = if_not_exists(#t, :ttl)',
      ExpressionAttributeNames: { '#c': 'count', '#t': 'ttl' },
      ExpressionAttributeValues: { ':one': { N: '1' }, ':ttl': { N: String(ttl) } },
      ReturnValues: 'UPDATED_NEW',
    }));
    const count = Number(res.Attributes.count.N);
    return count <= 5;
  } catch {
    return true; // fail-open on DDB error — alternatively fail-closed
  }
}
```

DynamoDB table:
```bash
aws dynamodb create-table \
  --table-name tigranmedia-rate-limit \
  --attribute-definitions AttributeName=ip,AttributeType=S \
  --key-schema AttributeName=ip,KeyType=HASH \
  --billing-mode PAY_PER_REQUEST

# Enable TTL
aws dynamodb update-time-to-live \
  --table-name tigranmedia-rate-limit \
  --time-to-live-specification "Enabled=true, AttributeName=ttl"

# Grant Lambda permission
aws lambda update-function-configuration \
  --function-name tigranmedia-contact \
  --role <role-arn-with-dynamodb-access>
```

## Recommendation

**Use API Gateway / Function URL throttling first** (5 minutes of work, no code change).
Add WAF rate-based rule for IP-level protection across the whole site.
DynamoDB is overkill unless you need complex windowing/per-user limits.
