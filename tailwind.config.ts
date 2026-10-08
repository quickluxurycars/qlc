// tailwind.config.ts
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: "#f2ca50",
        "primary-container": "#d4af37",
        "on-primary": "#3c2f00",
        "on-primary-container": "#554300",
        "primary-fixed": "#ffe088",
        "primary-fixed-dim": "#e9c349",
        "on-primary-fixed-variant": "#574500",

        // Secondary colors
        secondary: "#e7c35a",
        "secondary-container": "#896c00",
        "on-secondary": "#241a00",
        "on-secondary-container": "#fff3dc",
        "secondary-fixed": "#ffe08b",
        "secondary-fixed-dim": "#e7c35a",
        "on-secondary-fixed": "#241a00",
        "on-secondary-fixed-variant": "#584400",

        // Tertiary colors
        tertiary: "#dccf96",
        "tertiary-container": "#c0b37d",
        "on-tertiary": "#383006",
        "on-tertiary-container": "#4e451a",
        "tertiary-fixed": "#f1e3a9",
        "tertiary-fixed-dim": "#d4c78f",

        // Surface colors
        background: "#131315",
        "on-background": "#e5e1e4",
        surface: "#131315",
        "on-surface": "#e5e1e4",
        "surface-variant": "#353437",
        "on-surface-variant": "#d0c5af",
        "surface-container": "#201f21",
        "surface-container-low": "#1c1b1d",
        "surface-container-lowest": "#0e0e10",
        "surface-elevated": "#1A1A22",
        "surface-dim": "#131315",
        "surface-container-high": "#2a2a2c",
        "surface-container-highest": "#353437",
        "surface-glass": "rgba(18, 18, 22, 0.72)",
        "surface-carbon": "#121216",
        "surface-obsidian": "#0A0A0C",

        // Text colors
        "text-primary": "#F7F7F8",
        "text-muted": "#8E8E99",

        // Gold color variations
        gold: "#C9A24D",
        "gold-light": "#F3E5AB",
        "gold-burnished": "#C9A961",

        // Status colors
        "status-available": "#E5C158",
        "status-reserved": "#E5C158",

        // Border colors
        "border-gold-subtle": "rgba(212, 175, 55, 0.28)",
        "border-graphite": "rgba(255, 255, 255, 0.08)",
        outline: "#99907c",
        "outline-variant": "#4d4635",

        // Inverse colors
        "inverse-surface": "#e5e1e4",
        "inverse-on-surface": "#313032",
        "inverse-primary": "#735c00",

        // Error colors
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        // Surface tint
        "surface-tint": "#e9c349",

        // Legacy support
        "foreground": "var(--foreground)",
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4rem",
      },
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
      },
      fontSize: {
        "label-sm": ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025em" }],
        "label-md": ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.05em" }],
        "label-lg": ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.05em" }],
        "body-sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "body-md": ["1rem", { lineHeight: "1.5rem" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "title-md": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "600" }],
        "title-lg": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "headline-sm": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "headline-lg": ["2rem", { lineHeight: "2.5rem", fontWeight: "600" }],
        "display": ["3.5rem", { lineHeight: "3.75rem", fontWeight: "400" }],
      },
      fontFamily: {
        "label-sm": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "label-md": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "label-lg": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "body-sm": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "body-md": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "body-lg": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "title-md": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "title-lg": ["var(--font-plus-jakarta-sans)", "sans-serif"],
        "headline-sm": ["var(--font-playfair-display)", "serif"],
        "headline-lg": ["var(--font-playfair-display)", "serif"],
        "display": ["var(--font-playfair-display)", "serif"],
      },
    },
  },
});