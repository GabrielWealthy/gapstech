import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: {
          DEFAULT: "var(--surface)",
          raised: "var(--surface-raised)",
          sunken: "var(--surface-sunken)",
        },
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: {
          DEFAULT: "var(--accent)",
          bright: "var(--accent-bright)",
          dim: "var(--accent-dim)",
          wash: "var(--accent-wash)",
        },
        bone: "var(--accent-secondary)",
        line: {
          DEFAULT: "var(--border)",
          strong: "var(--border-strong)",
        },

        /* Legacy aliases — the admin area still uses the pre-redesign
           names. Mapped onto the new tokens so those screens keep working
           without pulling admin into this redesign's scope. */
        ink: {
          DEFAULT: "var(--background)",
          raised: "var(--surface-raised)",
          panel: "var(--surface)",
          border: "var(--border)",
        },
        red: {
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
          glow: "var(--accent-bright)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        // Dramatic display scale — clamped so it never overflows on mobile
        "display-xl": ["clamp(2.5rem, 8.5vw, 7.5rem)", { lineHeight: "0.93", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.5rem, 7.5vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-md": ["clamp(2rem, 5vw, 3.75rem)", { lineHeight: "1.0", letterSpacing: "-0.035em" }],
        "display-sm": ["clamp(1.6rem, 3.2vw, 2.5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        meta: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      maxWidth: {
        measure: "68ch",
        shell: "84rem",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      boxShadow: {
        // Real depth: offset + soft blur, never a zero-offset halo
        lift: "0 18px 50px -20px rgba(0, 0, 0, 0.9), 0 2px 8px -2px rgba(0, 0, 0, 0.6)",
        "lift-accent":
          "0 24px 60px -24px rgba(232, 38, 42, 0.45), 0 2px 10px -3px rgba(0, 0, 0, 0.7)",
        "red-sm": "0 4px 20px -4px rgba(232, 38, 42, 0.3)",
        "red-lg": "0 20px 60px -20px rgba(232, 38, 42, 0.4)",
      },
      animation: {
        marquee: "marquee 42s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
