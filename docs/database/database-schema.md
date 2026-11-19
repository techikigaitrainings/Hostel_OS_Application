# Database Schema

Source of truth: `supabase/migrations/`. This document summarizes conventions and current state.

## Conventions
- UUID primary keys (`gen_random_uuid()`).
- Every business row: `organization_id uuid not null` (+ `property_id` where scoped), RLS enforced.
- Timestamps: `created_at timestamptz default now()`, `updated_at timestamptz default now()`, `created_by` / `updated_by uuid references auth.users`.
- Soft deletion via `deleted_at` where history matters; financial rows are never deleted.
- Money: `bigint` minor units (paise), `currency text` alongside.
- Enums defined in migration `00000000000000`: `user_role`, `property_type`, `user_status`.

## Current tables
None yet — Module 01 will add `organizations`, `properties`, `memberships`, `profiles`, `audit_logs`.

## Planned (Module 01)
organizations, properties, buildings, floors, rooms, beds, profiles, memberships, roles/permissions mapping, audit_logs.
