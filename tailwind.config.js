/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        purple: "#8270E2",
        "purple-100": "#915eff",
        primary_container: "#272438",
        surface: "#1D1E33",
        msg: "#2D3742",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],

      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "chat-pattern": "url('/src/assets/pattern2.png')",
        purplegradient: "linear-gradient(45deg,#d4cef3,#915eff )",
      },
   
    },
  },
  plugins: [],
};