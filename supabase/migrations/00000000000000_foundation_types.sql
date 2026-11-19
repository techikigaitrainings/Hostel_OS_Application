-- Foundation: shared enum types for the Hostel OS schema.
-- Business tables arrive with Module 01. This migration only establishes conventions.

create extension if not exists "pgcrypto";

-- All enums live here so downstream migrations can reference them.
do $$ begin
  create type user_role as enum ('super_admin','owner','property_manager','warden','accountant','resident');
exception when duplicate_object then null; end $$;

do $$ begin
  create type property_type as enum ('hostel','pg','student_accommodation','co_living');
exception when duplicate_object then null; end $$;

do $$ begin
  create type user_status as enum ('active','invited','suspended');
exception when duplicate_object then null; end $$;
