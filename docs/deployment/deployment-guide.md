# Deployment Guide

- **Web**: Vercel. Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Never ship service-role key.
- **Backend**: Supabase cloud project; migrations via `supabase db push` in CI (GitHub Actions).
- **Mobile** (future): EAS Build; secrets in EAS, not repo.
- **CI**: GitHub Actions — install, typecheck, lint, build web on PR; migration push on merge to main.
- **Secrets**: Vercel project settings / Supabase secrets (`supabase secrets set`), never in git.
