/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "0.5rem"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
