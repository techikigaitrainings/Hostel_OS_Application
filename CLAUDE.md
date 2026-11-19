# CLAUDE.md — Hostel OS Project Rules

## What this project is
A commercial Hostel & PG Management Operating System: Next.js web app, React Native (Expo) mobile app, shared Supabase backend, AI-ready. Sold to multiple independent customers. See `docs/architecture/system-architecture.md`.

## Non-negotiable rules

1. **One module at a time.** Never start a module without explicit owner approval of the previous one. Workflow: Understand → Plan → Design → Develop → Test → Review → STOP.
2. **Backend is the authority.** Permissions enforced via PostgreSQL RLS and edge functions. UI hiding is convenience only.
3. **Historical data is immutable.** Never overwrite rent amounts, payments, allocation history, status changes. Corrections are new records, not edits.
4. **Money in minor units (paise).** All currency math via `@hostel-os/business-logic`. Transactions wrap all financial writes.
5. **Strict TypeScript.** No `any` without justification in a comment. Shared types in `packages/types` are the single source of truth.
6. **Never hardcode** a customer's name, pricing, address, or rules. No invented credentials. No fake production data.
7. **Never expose** service-role keys in frontend code. `.env.example` documents what owners must configure.
8. **Never mark incomplete features as completed.** Never silently ignore errors. No placeholder buttons in shipped modules.
9. **Validate at the boundary.** All inputs pass through `@hostel-os/validation` (Zod) on both client and server.
10. **Design system discipline.** Tokens live in `packages/ui/src/index.ts`; Tailwind maps them. No ad-hoc colors.

## Module status
Tracked in `docs/modules/module-status.md`. Update after every module.

## Where things live
- Web: `apps/web` · Mobile: `apps/mobile` (added when mobile phase starts)
- Shared logic: `packages/{types,validation,business-logic,permissions,api-client,ui}`
- Database: `supabase/migrations` — forward-only, dated, never edit an applied migration
- Docs: `docs/` — keep current after each module
