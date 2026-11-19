import type { Currency } from "@hostel-os/types";

/**
 * Money is stored in minor units (paise) throughout the system.
 * All currency math lives here so web, mobile and backend share one implementation.
 */

export function toMinorUnits(amount: number): number {
  return Math.round(amount * 100);
}

export function fromMinorUnits(amount: number): number {
  return amount / 100;
}

export function formatMoney(amountInMinor: number, currency: Currency = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(fromMinorUnits(amountInMinor));
}

export function occupancyRate(occupiedBeds: number, totalBeds: number): number {
  if (totalBeds <= 0) return 0;
  return Math.round((occupiedBeds / totalBeds) * 1000) / 10;
}
