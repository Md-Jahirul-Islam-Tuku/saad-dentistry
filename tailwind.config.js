/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6df954",

          "secondary": "#b54827",

          "accent": "#79a521",

          "neutral": "#29232F",

          "base-100": "#F9F9FB",

          "info": "#6786E9",

          "success": "#6BEBA7",

          "warning": "#F2CE40",

          "error": "#E14C6C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
