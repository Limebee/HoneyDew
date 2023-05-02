/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "jit",
 content: ["./views/**/*.{html,js,ejs}", "./public/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms')

],
}

