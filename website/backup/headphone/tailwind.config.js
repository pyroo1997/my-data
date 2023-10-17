/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide_in: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slidex: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slidey: {
          '0%': { transform: 'translatey(100%)' },
          '100%': { transform: 'translatey(0%)' },
        }
      },
      animation: {
        'slidex': 'slidex 300ms',
        'slidey': 'slidey 300ms'
      },
    },
  },
  plugins: [],
}

