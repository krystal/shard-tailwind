const { fontSize } = require("tailwindcss/defaultTheme");

module.exports = {
  ...["sm", "base", "lg"].reduce(
    (object, size) => ({
      ...object,
      [size]: fontSize[size],
    }),
    {}
  ),
  xs: [
    "0.75rem",
    {
      lineHeight: "1.125rem",
    },
  ],
  sm: [
    "0.875rem",
    {
      lineHeight: "1.5rem",
    },
  ],
  md: fontSize.base,
  "h-xs": [
    "1.25rem",
    {
      lineHeight: "1.75rem",
    },
  ],
  "h-sm": [
    "1.5rem",
    {
      lineHeight: "2rem",
    },
  ],
  "h-md": [
    "1.875rem",
    {
      lineHeight: "2.375rem",
    },
  ],
  "h-lg": [
    "2.25rem",
    {
      letterSpacing: "-0.02em",
      lineHeight: "2.75rem",
    },
  ],
  "h-xl": [
    "3rem",
    {
      letterSpacing: "-0.02em",
      lineHeight: "3.75rem",
    },
  ],
  "h-2xl": [
    "3.75rem",
    {
      letterSpacing: "-0.02em",
      lineHeight: "4.5rem",
    },
  ],
};
