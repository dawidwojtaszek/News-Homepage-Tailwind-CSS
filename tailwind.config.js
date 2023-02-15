/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      softOrange: "hsl(35, 77%, 62%)",
      softRed: "hsl(5, 85%, 63%)",
      offWhite: "hsl(36, 100%, 99%)",
      grayishBlue: "hsl(233, 8%, 79%)",
      darkGrayishBlue: "hsl(236, 13%, 42%)",
      veryDarkBlue: "hsl(240, 100%, 5%)",
      white: "#fff",
    },
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
    extend: {
      maxWidth: {
        1110: "1110px",
      },
      fontSize: {
        "font-nav": "1.1rem",
      },
    },
  },
  plugins: [],
};
