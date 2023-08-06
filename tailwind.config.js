/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#003e4f",
        softBlue: "#33384e",
        inter: "#66324c",
        softRed: "#992c4b",
        red: "#cc2649",
        baseText: "#694F82",
      }
    },
  },
  plugins: [],
}