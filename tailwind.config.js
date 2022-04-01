const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "cta-text": "#ff525d",
      "cta-bg": "#ff7a85",
      headings: "#1f3f5b",
      "footer-text": "#c8c8cb",
      "body-copy": "#4b5862",
      "footer-bg": "#25252d",
      "cta-mobilenav-vlightred": "#ff8f70",
      "cta-mobilenav-lightred": "#ff3d54",
      "dark-gray-blue": "#2c2d3f",
      "dark-desature-blue": "#3f4164",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    screens: {
      xs: "465px",
      ms: "510px",
      desktop: "929px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "mobile-bg": "url('./assets/bg-pattern-intro-mobile.svg')",
        "desktop-bg": "url('./assets/bg-pattern-intro-desktop.svg')",
        "circles-bg": "url('./assets/bg-pattern-circles.svg')",
        "body-gradient": "linear-gradient(rgba(44, 45, 63, 0.9)100%)",
      },
      backgroundPosition: {
        "top-4": "left -21rem bottom -32rem",
        StateofArt: "left -23rem bottom 14rem",
      },
      height: {
        "header-height": "35rem",
        StateofArt: "40rem",
      },
      borderRadius: {
        header: "5.5rem",
      },
      width: {
        "small-screen": "80%",
      },
      margin: {
        "small-screen": "0 auto",
      },
    },
  },
  plugins: [],
};
