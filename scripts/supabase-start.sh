#!/usr/bin/env bash
# One-command local Supabase bootstrap for macOS.
# Prereq: Docker Desktop running, Supabase CLI installed (brew install supabase/tap/supabase).
set -euo pipefail
cd "$(dirname "$0")/../supabase"

supabase start || { echo "supabase start failed — is Docker running?"; exit 1; }

echo ""
echo "Next steps:"
echo "1. Copy NEXT_PUBLIC_SUPABASE_URL and ANON key from the output above into apps/web/.env.local"
echo "2. Run: npm run dev"
