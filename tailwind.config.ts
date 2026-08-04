import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          raised: "#131313",
          panel: "#161616",
          border: "#242424",
        },
        red: {
          DEFAULT: "#E8262A",
          dim: "#B01F22",
          glow: "#FF3B3F",
        },
        muted: "#B3B3B3",
        faint: "#7A7A7A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "red-glow": "radial-gradient(60% 60% at 50% 0%, rgba(232,38,42,0.18) 0%, rgba(232,38,42,0) 70%)",
        "hex-grid": "linear-gradient(rgba(232,38,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,38,42,0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        "red-sm": "0 0 0 1px rgba(232,38,42,0.15), 0 4px 20px -4px rgba(232,38,42,0.25)",
        "red-lg": "0 20px 60px -20px rgba(232,38,42,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
