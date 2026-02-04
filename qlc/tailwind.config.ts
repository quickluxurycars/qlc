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
        fontFamily: {
          baskerville: ["var(--font-libre-baskerville)", "serif"],
        },
      },
    },
      colors: {
        background: "#C9A24D",
        foreground: "var(--foreground)",
        gold: "#C9A24D",
      },
    });