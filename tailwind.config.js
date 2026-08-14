/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { xl: "1200px" },
    },
    extend: {
      colors: {
        // theme-reactive text color (flips with data-theme)
        navy: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          muted: "var(--ink-muted)",
        },
        // fixed deep-purple used for deliberate dark surfaces (AI section,
        // primary buttons) — identical in both themes on purpose
        deep: "#2E0B57",
        offwhite: "var(--bg)",
        surface: "var(--surface)",
        skyblue: {
          DEFAULT: "var(--tint-purple)",
          deep: "var(--tint-purple-deep)",
        },
        mint: {
          DEFAULT: "var(--tint-amber)",
          deep: "var(--tint-amber-deep)",
        },
        cyan: {
          DEFAULT: "var(--accent-1)",
          soft: "var(--accent-1-soft)",
        },
        leaf: {
          DEFAULT: "var(--accent-2)",
          soft: "var(--accent-2-soft)",
        },
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(46,11,87,0.35)",
        card: "0 16px 40px -20px rgba(46,11,87,0.22)",
      },
      backgroundImage: {
        "grad-sky": "linear-gradient(135deg, var(--tint-purple) 0%, var(--bg) 55%, var(--tint-amber) 100%)",
        "grad-accent": "linear-gradient(120deg, var(--accent-1) 0%, var(--accent-1b) 55%, var(--accent-2) 100%)",
      },
    },
  },
  plugins: [],
};
