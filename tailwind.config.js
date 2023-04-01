/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1c1b22",
        light: "#fff",
        ink: "var(--color-ink)",
        "ink-light": "var(--color-ink-light)",
        reverse: "var(--color-reverse)",
        "reverse-light": "var(--color-reverse-light)",
        primary: "#7cce7c",
        secondary: "#7c7cce",
      },
    },
  },
  plugins: [],
};
