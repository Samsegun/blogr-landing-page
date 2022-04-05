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
      backdrop: "#2b2a2acc",
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
        "design-for-future": "url('./assets/illustration-editor-desktop.svg')",
        "free-open": "url('./assets/illustration-laptop-desktop.svg')",
        "body-gradient": "linear-gradient(rgba(44, 45, 63, 0.9)100%)",
        "button-gradient":
          "linear-gradient(to left,rgb(255, 61, 84) 10%,rgb(255, 143, 112) 90%)",
      },
      backgroundPosition: {
        "top-4": "left -21rem bottom -32rem",
        StateofArt: "left -21rem bottom 7rem",
        "desktop-soa": "left -21rem bottom -6rem",
        "design-ff": "left 2rem bottom 0rem",
        "free-open": "right -1rem bottom 0rem;",
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
      animation: {
        "slide-in": "slide-in 1s ease forwards",
        "close-nav": "close-nav 1s ease forwards",
        "open-nav": "open-nav 1s ease forwards",
        backdrop: "backdrop 1s ease forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translate(-50%, -3rem)" },
          "100%": { transform: "translate(-50%, 0)" },
        },
        "close-nav": {
          "0%": { transform: "translate(0, -2rem)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "open-nav": {
          "0%": { transform: "translate(0, 2rem)" },
          "100%": { transform: "translate(0, 0)" },
        },
        backdrop: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
