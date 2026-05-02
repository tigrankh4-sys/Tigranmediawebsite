#!/usr/bin/env bash
set -euo pipefail

# One-time setup: create a CloudFront Response Headers Policy and attach it
# to the tigranmedia.be distribution. Re-run safely — it detects existing policy.

DISTRIBUTION_ID="EM0N7M5T0RYSC"
POLICY_NAME="tigranmedia-security-headers"
POLICY_JSON="$(dirname "$0")/security-headers-policy.json"

# 1. Find or create the policy
POLICY_ID=$(aws cloudfront list-response-headers-policies \
  --type custom \
  --query "ResponseHeadersPolicyList.Items[?ResponseHeadersPolicy.ResponseHeadersPolicyConfig.Name=='${POLICY_NAME}'].ResponseHeadersPolicy.Id | [0]" \
  --output text)

if [ "$POLICY_ID" = "None" ] || [ -z "$POLICY_ID" ]; then
  echo "Creating policy ${POLICY_NAME}..."
  POLICY_ID=$(aws cloudfront create-response-headers-policy \
    --cli-input-json "file://${POLICY_JSON}" \
    --query "ResponseHeadersPolicy.Id" \
    --output text)
  echo "Created policy: ${POLICY_ID}"
else
  echo "Policy exists: ${POLICY_ID} — updating..."
  ETAG=$(aws cloudfront get-response-headers-policy --id "${POLICY_ID}" --query "ETag" --output text)
  aws cloudfront update-response-headers-policy \
    --id "${POLICY_ID}" \
    --if-match "${ETAG}" \
    --cli-input-json "file://${POLICY_JSON}" >/dev/null
  echo "Updated policy: ${POLICY_ID}"
fi

# 2. Attach policy to default cache behavior of the distribution
echo "Fetching distribution config..."
aws cloudfront get-distribution-config --id "${DISTRIBUTION_ID}" \
  --query "DistributionConfig" --output json > /tmp/dist-config.json
ETAG=$(aws cloudfront get-distribution-config --id "${DISTRIBUTION_ID}" --query "ETag" --output text)

# Inject ResponseHeadersPolicyId into DefaultCacheBehavior
node -e "
const fs = require('fs');
const c = JSON.parse(fs.readFileSync('/tmp/dist-config.json', 'utf8'));
c.DefaultCacheBehavior.ResponseHeadersPolicyId = '${POLICY_ID}';
if (c.CacheBehaviors && c.CacheBehaviors.Items) {
  for (const b of c.CacheBehaviors.Items) {
    b.ResponseHeadersPolicyId = '${POLICY_ID}';
  }
}
fs.writeFileSync('/tmp/dist-config-updated.json', JSON.stringify(c, null, 2));
"

aws cloudfront update-distribution \
  --id "${DISTRIBUTION_ID}" \
  --if-match "${ETAG}" \
  --distribution-config "file:///tmp/dist-config-updated.json" >/dev/null

echo "Distribution ${DISTRIBUTION_ID} updated. Propagation: ~5-10 min."
echo "Test after propagation: curl -sI https://tigranmedia.be | grep -iE 'strict-transport|content-security|x-frame|referrer-policy|permissions-policy|x-content-type'"
