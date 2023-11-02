const path = require("path");
const tailwindColors = require("tailwindcss/colors");
const { withOptions } = require("tailwindcss/plugin");

const colors = require("./colors");
const typography = require("./typography");
const { getShardContentPaths, getShardPath } = require("./utilities");

const TAILWIND_DEPRECATED_COLORS = Object.freeze([
  "blueGray",
  "coolGray",
  "lightBlue",
  "trueGray",
  "warmGray",
]);

const plugin = withOptions(
  function (options = {}) {
    const shardPath = options.path ?? getShardPath();

    if (!shardPath) {
      throw new Error("Shard is not installed");
    }

    return function ({ config }) {
      const paths = getShardContentPaths(shardPath);
      const { files } = config("content");

      paths.forEach((file) => files.push(path.join(shardPath, file)));
    };
  },
  function (options = {}) {
    const defaultColors = options.defaultColors ?? false;
    const grayColor = options.grayColor ?? "carbon";
    const primaryColor = options.primaryColor ?? "carbon";
    const customColors = options.customColors ?? {};

    const colorsWithCustomColors = { ...colors, ...customColors };

    const colorsObject = {
      ...(defaultColors
        ? Object.keys(tailwindColors).reduce(
            (object, key) =>
              TAILWIND_DEPRECATED_COLORS.includes(key)
                ? object
                : {
                    ...object,
                    [key]: tailwindColors[key],
                  },
            {}
          )
        : {}),
      ...colorsWithCustomColors,
      gray: colorsWithCustomColors[grayColor],
      primary: colorsWithCustomColors[primaryColor],
    };

    return {
      safelist: [
        {
          pattern: /bg-+/,
        },
        {
          pattern: /border-+/,
        },
        {
          pattern: /grid-cols-+/,
        },
        {
          pattern: /text-+/,
        },
      ],
      theme: {
        colors: colorsObject,
        fontSize: typography,
        extend: {
          spacing: {
            4.5: "1.125.rem",
          },
        },
      },
    };
  }
);

module.exports = plugin;
