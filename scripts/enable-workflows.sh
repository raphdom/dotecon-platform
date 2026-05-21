#!/usr/bin/env bash
# One-command setup to activate GitHub Actions CI/CD.
# Prerequisites: git configured, PAT with `workflow` scope.
set -euo pipefail
echo "Enabling GitHub Actions workflows..."
mkdir -p .github/workflows
cp docs/workflows/ci.yml .github/workflows/ci.yml
cp docs/workflows/deploy.yml .github/workflows/deploy.yml
git add .github/
git commit -m "ci: enable GitHub Actions CI and deploy workflows"
git push
echo ""
echo "Done. Next steps:"
echo "  1. Add VERCEL_TOKEN secret to GitHub repo settings"
echo "  2. Add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY, DATABASE_URL, DIRECT_URL to Vercel project"
echo "  3. The deploy workflow will fire on the next push to main"