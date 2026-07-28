import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E0E14",
          50: "#F4F2EE",
          100: "#E7E3DB",
          800: "#17171F",
          900: "#0E0E14",
          950: "#08080C",
        },
        gold: {
          DEFAULT: "#D4A05C",
          light: "#E8C08A",
          dark: "#A87A3F",
        },
        wine: {
          DEFAULT: "#5E2233",
          light: "#7A2E43",
        },
        bone: "#F5F1EA",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url('/textures/grain.svg')",
      },
      keyframes: {
        "iris-open": {
          "0%": { clipPath: "circle(0% at 50% 50%)" },
          "100%": { clipPath: "circle(75% at 50% 50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "iris-open": "iris-open 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
