import type { Config } from "tailwindcss";
import { tokens } from "@hostel-os/ui";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: tokens.colors.background,
        surface: tokens.colors.surface,
        ink: tokens.colors.ink,
        "ink-secondary": tokens.colors.inkSecondary,
        accent: tokens.colors.accent,
        "accent-soft": tokens.colors.accentSoft,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        danger: tokens.colors.danger,
        line: tokens.colors.border,
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        sm: tokens.radii.sm,
        md: tokens.radii.md,
        lg: tokens.radii.lg,
      },
      boxShadow: {
        card: "0 1px 2px rgba(26, 35, 50, 0.05), 0 1px 3px rgba(26, 35, 50, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
