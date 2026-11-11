import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAF8F4",
        card: "#FFFFFF",
        ink: "#16201B",
        muted: "#4B5A52",
        line: "#E3DED3",
        accent: { DEFAULT: "#1E7B54", dark: "#165C3F", soft: "#E4F0E9" },
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
