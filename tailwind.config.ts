import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — Design Station
        cream: {
          50:  "#FBF9F3",
          100: "#F5F0E6", // primary background
          200: "#EDE5D4",
          300: "#DED1B6",
        },
        sage: {
          300: "#C2C3A4",
          400: "#AEB08C",
          500: "#9A9B78", // primary accent
          600: "#7E7F5F",
          700: "#62634A",
        },
        walnut: {
          600: "#5A4836",
          700: "#48392B",
          800: "#3A2E24", // primary text / dark
          900: "#241C15",
        },
        line: "rgba(58, 46, 36, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-fa)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-fa)", "serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      animation: {
        marquee: "marquee 60s linear infinite",
        fade: "fade 1.2s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
