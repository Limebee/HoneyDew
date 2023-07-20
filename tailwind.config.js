/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  mode: "jit",
 content: ["./views/**/*.{html,js,ejs}", "./public/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#fef3c7",
        
        "secondary": "#d97706",
        
        "accent": "#fef3c7",
        
        "neutral": "#fcd34d",
        
        "base-100": "#fbbf24",
        
        "info": "#b45309",
        
        "success": "#d97706",
        
        "warning": "#78350f",
        
        "error": "#a16207",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
   

],
}

