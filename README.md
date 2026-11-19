# Hostel OS

The operating system for hostels and PGs — web, mobile and AI on one shared backend.

## Architecture

Monorepo (npm workspaces):

```
apps/web        Next.js 15 + TS strict + Tailwind
apps/mobile     Expo (added in mobile phase)
packages/       types · validation · business-logic · permissions · api-client · ui
supabase/       migrations · seed · functions (local-first dev)
docs/           architecture · database · modules · testing · deployment
```

## Getting started (macOS)

Prerequisites: Node 20+, Docker Desktop (running), Supabase CLI.

```bash
npm install
chmod +x scripts/supabase-start.sh
./scripts/supabase-start.sh   # starts local Supabase (API :54321, Studio :54323)
cp .env.example apps/web/.env.local   # then paste the URL + anon key from the supabase start output
npm run dev                    # web app at http://localhost:3000
```

No Supabase credentials are committed — copy them from your own `supabase start` output.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Web dev server |
| `npm run build` | Production web build |
| `npm run typecheck` | TypeScript strict check across all workspaces |
| `npm run lint` | ESLint (web) |
| `supabase start` / `supabase stop` | Local backend stack |

## Status

Foundation complete. See `docs/modules/module-status.md` for the module checklist.
