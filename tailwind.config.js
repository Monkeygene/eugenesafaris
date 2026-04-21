/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        linen: 'rgb(254, 252, 250)',
      },
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
      },
    },
  },
  plugins: [],
}