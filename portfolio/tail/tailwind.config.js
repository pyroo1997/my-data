/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jts,jsx,tsx}"],
  theme: {
      fontFamily: {
        'CinzelDecorative': ['"Cinzel Decorative"', 'cursive'],
        'Gloock': ['Gloock', 'serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Questrial': ['Questrial', 'sans-serif']
    },
  },
  plugins: [],
}
