import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "var(--color-navy)",
        "deep-blue": "var(--color-deep-blue)",
        sky: "var(--color-sky)",
        gold: "var(--color-gold)",
        cream: "var(--color-cream)",
        muted: "var(--color-muted)",
        glass: "var(--color-glass)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 0 3px rgba(201,147,42,0.3)',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
export default config;
