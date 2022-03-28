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
    extend: {
      backgroundImage: {
        "mobile-bg": "url('./src/assets/bg-pattern-intro-mobile.svg')",
        "desktop-bg": "url('./src/assets/bg-pattern-intro-desktop.svg')",
        "circles-bg": "url('./src/assets/bg-pattern-circles.svg')",
      },
    },
  },
  plugins: [],
};
