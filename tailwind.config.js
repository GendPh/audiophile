/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./src/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        'brown': '#D87D4A',
        'brown-light': '#fbaf85',
        'black': '#101010',
        'gray': '#f1f1f1',
        'gray-light': '#fafafa',
      }
    },
    fontFamily: {
      "Manrope": ["Manrope", "sans-serif"],
    },
    gridTemplateRows: {
      "2lines": "80px 1fr",
    }
  },
  plugins: [],
}