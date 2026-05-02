#!/usr/bin/env bash
set -euo pipefail

# Build + deploy lambda/contact.mjs
# Usage: ./infrastructure/deploy-lambda.sh <function-name>

FUNCTION_NAME="${1:-tigranmedia-contact-form}"
REGION="${AWS_REGION:-eu-west-1}"
LAMBDA_DIR="$(cd "$(dirname "$0")/.." && pwd)/lambda"
WORK="$(mktemp -d)"

echo "Building lambda from ${LAMBDA_DIR}..."
# Lambda Handler is "index.handler" — rename source to index.mjs
cp "${LAMBDA_DIR}/contact.mjs" "${WORK}/index.mjs"
cp "${LAMBDA_DIR}/package.json" "${WORK}/"
( cd "${WORK}" && npm install --omit=dev --silent )

ZIP="${WORK}/contact.zip"
( cd "${WORK}" && zip -qr "${ZIP}" index.mjs node_modules package.json )

echo "Uploading to Lambda function: ${FUNCTION_NAME} (region: ${REGION})"
aws lambda update-function-code \
  --function-name "${FUNCTION_NAME}" \
  --region "${REGION}" \
  --zip-file "fileb://${ZIP}" \
  --query "{Version:Version,LastModified:LastModified}" \
  --output table

rm -rf "${WORK}"
echo "Done."
