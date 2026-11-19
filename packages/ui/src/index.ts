/**
 * Design tokens for Hostel OS — the single source of visual truth.
 * Web (Tailwind) and mobile (NativeWind) both consume these values.
 */
export const tokens = {
  colors: {
    background: "#FAFAF8",
    surface: "#FFFFFF",
    ink: "#1A2332",
    inkSecondary: "#5A6474",
    accent: "#0E7490", // restrained teal
    accentSoft: "#E0F2F7",
    success: "#15803D",
    warning: "#B45309",
    danger: "#B91C1C",
    border: "#E5E7EB",
  },
  radii: { sm: "6px", md: "10px", lg: "16px" },
  spacing: { unit: 4 },
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  },
} as const;
