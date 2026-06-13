import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0a1d31",
          900: "#102b42",
          800: "#17476b",
          700: "#3a6a8a",
          500: "#6f8fa3",
          300: "#aebcc5",
          100: "#ebebee",
          50:  "#f4f6f8",
        },
        cream: {
          50:  "#fbfaf7",
          100: "#f4f1ea",
          200: "#ece8df",
          300: "#ddd6c7",
        },
        line: "rgba(16,43,66,0.10)",
      },
      fontFamily: {
        sans: ["var(--font-dooran)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-dooran)", "serif"],
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
