/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        default: {
          "text-col": "#182848",
          "light-stone": "#808080",
          blue: "#33D1F9",
          "dark-blue": "#002C8F",
          "footer-bg": "#001A56",
          "footer-bottom": "#001442",
          "small-nav": "#061A3A",
        },
      },
      fontFamily: {
        sans: "Open Sans",
        spartan: "League Spartan",
      },
      content: {
        aboutBefore: "url('../images/about/shape-1.png')",
      },
      backgroundImage: {
        "protect-bg": "url('../images/protect/protect-bg.png')",
        "about-bg": "url('../images/about/about-1.png')",
        "main-bg": "url('../images/main/main-bg.jpg')",
        "pricing-bg": "url('../images/pricing/pricing-bg.png')",
      },
    },
  },
  plugins: [],
};
