import type { Role } from "@hostel-os/types";

/**
 * Permission catalogue. Backend (RLS / edge functions) is the enforcement point;
 * the UI uses this catalogue only to hide/disable actions — never as the authority.
 */
export const PERMISSIONS = [
  "property.view",
  "property.manage",
  "resident.view",
  "resident.manage",
  "finance.view",
  "finance.manage",
  "operations.view",
  "operations.manage",
  "reports.view",
  "ai.use",
  "admin.manage",
] as const;

export type Permission = (typeof PERMISSIONS)[number];

const rolePermissions: Record<Role, readonly Permission[]> = {
  super_admin: PERMISSIONS,
  owner: [
    "property.view",
    "property.manage",
    "resident.view",
    "finance.view",
    "finance.manage",
    "operations.view",
    "reports.view",
    "ai.use",
    "admin.manage",
  ],
  property_manager: [
    "property.view",
    "resident.view",
    "resident.manage",
    "finance.view",
    "operations.view",
    "operations.manage",
    "reports.view",
  ],
  warden: [
    "property.view",
    "resident.view",
    "operations.view",
    "operations.manage",
  ],
  accountant: ["property.view", "resident.view", "finance.view", "finance.manage", "reports.view"],
  resident: [],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role].includes(permission);
}

export function permissionsForRole(role: Role): readonly Permission[] {
  return rolePermissions[role];
}
