import { z } from "zod";

export const organizationCreateSchema = z.object({
  name: z.string().min(2).max(120),
  currency: z.string().length(3).default("INR"),
});

export const propertyCreateSchema = z.object({
  name: z.string().min(2).max(120),
  type: z.enum(["hostel", "pg", "student_accommodation", "co_living"]),
  addressLine1: z.string().min(3).max(200),
  city: z.string().min(2).max(80),
  state: z.string().min(2).max(80),
  pincode: z.string().regex(/^\d{6}$/, "PIN code must be 6 digits"),
});

export type OrganizationCreateInput = z.infer<typeof organizationCreateSchema>;
export type PropertyCreateInput = z.infer<typeof propertyCreateSchema>;
