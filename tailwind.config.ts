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
      },
      fontFamily: {
        sans: ["var(--font-dooran)", "system-ui", "sans-serif"],
        display: ["var(--font-dooran)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(16,43,66,0) 0%, rgba(16,43,66,0.04) 100%)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.063 0 0 0 0 0.169 0 0 0 0 0.259 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        marquee: "marquee 38s linear infinite",
        shine: "shine 2.6s linear infinite",
        stitch: "stitch 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-22px,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        stitch: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-32" },
        },
      },
      boxShadow: {
        glow: "0 30px 80px -20px rgba(23,71,107,0.45)",
        inset: "inset 0 1px 0 0 rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
