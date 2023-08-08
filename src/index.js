const path = require("path");
const tailwindColors = require("tailwindcss/colors");
const tailwindDefaultTheme = require("tailwindcss/defaultTheme");
const { withOptions } = require("tailwindcss/plugin");

const colors = require("./colors");
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
    const primaryColor = options.primaryColor ?? "indigo";

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
      ...colors,
      primary: colors[primaryColor],
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
        fontSize: {
          ...["sm", "base", "lg"].reduce(
            (object, size) => ({
              ...object,
              [size]: tailwindDefaultTheme.fontSize[size],
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
        },
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
