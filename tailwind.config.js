/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        akaya: ["Akaya Kanadaka", "system-ui"],
        miniver: ["Miniver", "system-ui"],
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "8xl": "85rem",
      }
    },
  },
  plugins: [],
}