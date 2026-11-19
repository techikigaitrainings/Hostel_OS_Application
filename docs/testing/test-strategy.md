# Test Strategy

- **Unit**: business-logic (money, occupancy), validation schemas, permission catalogue. Node test runner, colocated `*.test.ts`.
- **Integration**: edge functions against local Supabase; RLS policy tests as SQL (per-role connection, assert allowed/denied).
- **Web**: Playwright smoke per critical flow; responsive checks at 375/768/1280.
- **Mobile** (future): Expo on Android emulator + iOS simulator; permission and push tests.
- **Gate per module**: typecheck + lint + unit + relevant integration green before status moves to Testing.
