/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "250px",
      md: "700px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        FjallaOne: ['Fjalla One', "sans-serif"],
        Roborto: ['Roboto', "sans-serif"],
        Lato: ['Lato', "sans-serif"],
        Quicksand: ['Quicksand', "sans-serif"],
      },
      colors: {
        primary: "#8d8640",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
