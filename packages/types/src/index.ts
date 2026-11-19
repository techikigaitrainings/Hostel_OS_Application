/**
 * Shared domain types for Hostel OS.
 * These are the single source of truth for entity shapes across web, mobile and backend.
 * Keep in sync with docs/database/database-schema.md and supabase migrations.
 */

export type Uuid = string;

export const ROLES = [
  "super_admin",
  "owner",
  "property_manager",
  "warden",
  "accountant",
  "resident",
] as const;

export type Role = (typeof ROLES)[number];

export type UserStatus = "active" | "invited" | "suspended";

export type PropertyType = "hostel" | "pg" | "student_accommodation" | "co_living";

export type Currency = "INR" | string;

export interface Organization {
  id: Uuid;
  name: string;
  slug: string;
  currency: Currency;
  createdAt: string;
  updatedAt: string;
}

export interface Property {
  id: Uuid;
  organizationId: Uuid;
  name: string;
  type: PropertyType;
  addressLine1: string;
  city: string;
  state: string;
  pincode: string;
  createdAt: string;
  updatedAt: string;
}

export interface Membership {
  id: Uuid;
  userId: Uuid;
  organizationId: Uuid;
  propertyId: Uuid | null; // null => org-wide role
  role: Role;
  status: UserStatus;
  createdAt: string;
}
