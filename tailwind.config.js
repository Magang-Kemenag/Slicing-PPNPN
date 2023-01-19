/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"'],
      },
      colors: {
        aBlue: "#1F5F8B",
        bBlue: "#334777",
        cBlue: "#65A8CA",
        dBlue: "#1891AC",
        lBlue: "#D2ECF9",
      },
    },
  },
  plugins: [require("daisyui")],
};
