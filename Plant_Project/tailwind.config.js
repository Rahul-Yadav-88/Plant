/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        moderustic: ['"Moderustic"', 'sans-serif'],
      },
      colors:{
        greens:'#028C70'
      }
    },
  },
  plugins: [],
}

