# System Architecture

## Overview
Modular monolith. One Supabase project (Postgres + Auth + Storage + Edge Functions) serves the Next.js web app and the Expo mobile app. All business logic shared in workspace packages so web, mobile and backend execute identical rules.

## Layers
- **Data**: PostgreSQL with RLS, UUID PKs, org/property scoping on every business row, immutable history tables.
- **Backend**: Supabase Auth (sessions shared across web/mobile), Storage (documents), Edge Functions (AI proxy, integrations, privileged writes). No standalone API server.
- **Shared packages**: types (contracts), validation (Zod schemas), business-logic (money, occupancy), permissions (role→permission catalogue), api-client (Supabase factories), ui (design tokens).
- **Clients**: web (Next.js app router, server components by default), mobile (Expo Router — added in mobile phase).

## Data isolation
Every business table carries `organization_id` (and `property_id` where relevant) with RLS policies joining `memberships`. Super admin bypasses via explicit policy, not service role in app code.

## AI
Edge-function proxy to LLM providers; retrieval scoped to caller's authorized data; tool-calling gated by the same permission catalogue; provider-agnostic adapter. Never a client-side LLM key.

## Environments
Local (Supabase CLI + Docker) → Preview (Vercel + Supabase branch) → Production (Vercel + Supabase cloud).
