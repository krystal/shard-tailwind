const tailwindColors = require("tailwindcss/colors");
// const { prefixKeys } = require("./utilities");

const base = {
  current: "currentColor",
  black: "#000000",
  transparent: "transparent",
  white: "#ffffff",
};

const deprecated = [
  "blueGray",
  "coolGray",
  "lightBlue",
  "trueGray",
  "warmGray",
];

const grays = {
  blue: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  cool: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  iron: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  modern: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  neutral: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  true: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  warm: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
};

const krystal = {
  indigo: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
  purple: {
    25: "",
    50: "",
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
};

const primary = {
  carbon: {
    25: "#fafbfc",
    50: "#f6f7f9",
    100: "#ebedf0",
    200: "#dbe0e6",
    300: "#c2cbd5",
    400: "#93a1b3",
    500: "#5e7086",
    600: "#4d5a6d",
    700: "#3e4856",
    800: "#282f38",
    900: "#182229",
  },
  grass: {
    25: "#f7fdf7",
    50: "#effbef",
    100: "#dff9e0",
    200: "#c1f1c3",
    300: "#91e495",
    400: "#5ace60",
    500: "#34b33c",
    600: "#369c37",
    700: "#297e2a",
    800: "#225923",
    900: "#1d4a1f",
  },
  midnight: {
    25: "#fbfcfe",
    50: "#f4f5fb",
    100: "#dbe2f0",
    200: "#c3cfe7",
    300: "#99add7",
    400: "#6382c0",
    500: "#4265a7",
    600: "#345395",
    700: "#243e68",
    800: "#1f2e4d",
    900: "#101828",
  },
  moss: {
    25: "#f7fffd",
    50: "#eeffef9",
    100: "#c9feef",
    200: "#93fce0",
    300: "#55f3ce",
    400: "#23deb9",
    500: "#0ac2a0",
    600: "#069d84",
    700: "#058673",
    800: "#045e52",
    900: "#034f45",
  },
  mustard: {
    25: "#fefcf5",
    50: "#fffaeb",
    100: "#fdefc8",
    200: "#fcdd8b",
    300: "#fac64f",
    400: "#f9af26",
    500: "#f3931b",
    600: "#d76808",
    700: "#b2470b",
    800: "#903710",
    900: "#772e10",
  },
  palm: {
    25: "#f6fbf4",
    50: "#f0f9ec",
    100: "#dff1d6",
    200: "#c1e5b1",
    300: "#9ad383",
    400: "#67b848",
    500: "#5ea641",
    600: "#498831",
    700: "#3c6c29",
    800: "#325625",
    900: "#2a4720",
  },
  sea: {
    25: "#f8fbff",
    50: "#f1f7fe",
    100: "#e2eefc",
    200: "#bfdaf8",
    300: "#87bcf2",
    400: "#479be9",
    500: "#1f7ed8",
    600: "#1262b7",
    700: "#1156a3",
    800: "#11447b",
    900: "#143a66",
  },
  sky: {
    25: "#f8fbff",
    50: "#f1f7fe",
    100: "#e2eefc",
    200: "#bfdaf8",
    300: "#87bcf2",
    400: "#479be9",
    500: "#1f7ed8",
    600: "#1262b7",
    700: "#1156a3",
    800: "#11447b",
    900: "#143a66",
  },
  sunshine: {
    25: "#fffdf0",
    50: "#fefce8",
    100: "#fff9c2",
    200: "#ffef88",
    300: "#ffde44",
    400: "#fec707",
    500: "#eeb004",
    600: "#cd8701",
    700: "#a45f04",
    800: "#874a0c",
    900: "#733d10",
  },
  toucan: {
    25: "#fffbfa",
    50: "#fff3f1",
    100: "#ffe5e1",
    200: "#ffcec7",
    300: "#ffaba0",
    400: "#ff7c6a",
    500: "#f8513b",
    600: "#e8442e",
    700: "#c22813",
    800: "#a02514",
    900: "#842518",
  },
};

const secondary = {};

const states = {
  error: {
    25: "#fffbfa",
    50: "#fef3f2",
    100: "#fee4e2",
    200: "#fecdca",
    300: "#fda29b",
    400: "#f97066",
    500: "#f04438",
    600: "#d92d20",
    700: "#b42318",
    800: "#912018",
    900: "#7a271a",
    950: "#2F0600",
  },
  success: {
    25: "#f6fef9",
    50: "#ecfdf3",
    100: "#d1fadf",
    200: "#a6f4c5",
    300: "#6ce9a6",
    400: "#32d583",
    500: "#12b76a",
    600: "#039855",
    700: "#027a48",
    800: "#05603a",
    900: "#054f31",
    950: "#012114",
  },
  warning: {
    25: "#fffcf5",
    50: "#fffaeb",
    100: "#fef0c7",
    200: "#fedf89",
    300: "#fec84b",
    400: "#fdb022",
    500: "#f79009",
    600: "#dc6803",
    700: "#b54708",
    800: "#93370d",
    900: "#7a2e0e",
    950: "#2F0F01",
  },
};

const colors = {
  ...base,
  // ...prefixKeys(grays, "gray"),
  // ...prefixKeys(krystal, "krystal"),
  ...primary,
  // ...secondary,
  ...states,
};

module.exports = (options = {}) => {
  const custom = options.custom ?? {};
  const defaults = {
    gray: "carbon",
    primary: "carbon",
    ...(options.defaults ?? {}),
  };
  const tailwind = options.tailwind ?? false;

  const gray = defaults.gray ?? "carbon";
  const primary = defaults.primary ?? "carbon";

  const palette = { ...colors, ...custom };

  if (tailwind) {
    for (const key of Object.keys(tailwindColors)) {
      if (!palette[key] && !deprecated.includes(key)) {
        palette[key] = tailwindColors[key];
      }
    }
  }

  return {
    ...palette,
    gray: palette[gray],
    primary: palette[primary],
  };
};
