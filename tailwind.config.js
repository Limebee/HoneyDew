/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "jit",
  purge: ["./views/**/*.{html,js,ejs}", "./public/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

