/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Header.js",
    "./src/components/Hero.js",
    "./src/components/Showcase.js",
    "./src/components/Blog.js",
    "./src/components/Footer.js"
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
    fontFamily: {
      sans: ["Roboto", "sans-serif"]
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-4': {
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
