/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#212121",
        primary: {
          500: "#E3D3FF",
          1000: "#C29DFF"
        },
        secondary: "#484848"
      }
    },
  },
  plugins: [],
}
