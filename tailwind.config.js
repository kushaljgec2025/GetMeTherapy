/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#FE8C00",
        secondary: "#fb923c",
        white: "#FFFFFF",
        gray: "#C2C2C2",
        textgray: "#878787",
      }
    },

  },
  plugins: [],
}

