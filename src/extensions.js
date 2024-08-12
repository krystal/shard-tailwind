const { screens } = require("tailwindcss/defaultTheme");

const spacing = {
  4.5: "1.125.rem",
};

module.exports = {
  screens: {
    xs: "480px",
    ...screens,
  },
  spacing,
};
