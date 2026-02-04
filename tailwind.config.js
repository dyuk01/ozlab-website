/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#D8D8D8',
        'bg-secondary': '#ECECEC',
        'text-primary': '#B8A8D6',
        'text-dark': '#3A3A3A',
        'accent': '#9B8AB8',
        'highlight': '#A8B8C8',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
