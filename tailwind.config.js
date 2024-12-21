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
      colors: {
        bg: {
          btn: "#2027C6",
          blue: "#3038E5",
          lightBtn: "#ffffff30",
        },
        text: {
          fadedBlue: "#9DA3F9",
          white: "#ffffff",
          inactive: "#648CFF",
          grey: "#9397B3",
          darkBlue: "#1E2240",
        },
      },
    },
  },
  plugins: [],
}