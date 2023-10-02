/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      }
    },
    screens: {
      lg: {max: '1200px'},
      lg2: {max: '1100px'},
      lg3: {max: '1060px'},
      md: {max: '950px'},
      sm: {max: '770px'},
      sm2: {max: '670px'},
      xs: {max: '460px'},
    }
  },
  plugins: [],
};
