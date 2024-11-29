/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor : {
        'primary':'rgb(124 58 237)',
        'secondary':'rgb(82 44 147)',
      }
    },
    fontFamily : { 
      'hero-font': 'Sriracha'
    }
  },
  plugins: [],
}

