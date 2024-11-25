/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy_regular: ["Gilroy_Regular", "sans-serif"],
        gilroy_medium: ["Gilroy_Medium", "sans-serif"],
        gilroy_semibold: ["Gilroy_Semibold", "sans-serif"],
        gilroy_bold: ["Gilroy_Bold", "sans-serif"],
        gilroy_black: ["Gilroy_Black", "sans-serif"],
        gilroy_light: ["Gilroy_Light", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}