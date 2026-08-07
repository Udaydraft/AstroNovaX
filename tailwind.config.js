/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "var(--bg)",
        border: "var(--surface-border)",
        "muted-foreground": "var(--ink-soft)",
        primary: "var(--purple-2)",
        magenta: "var(--magenta)",
        amber: "var(--orange-1)",
        "violet-deep": "var(--purple-1)",
      },
      zIndex: {
        100: "100",
      },
      keyframes: {
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        draw: {
          from: { strokeDashoffset: 640 },
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        orbit: "orbit 8s linear infinite",
        draw: "draw 1.8s cubic-bezier(0.65,0,0.35,1) forwards",
      },
    },
  },
  plugins: [],
};
