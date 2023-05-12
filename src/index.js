const defaultTheme = require("tailwindcss/defaultTheme");
const fs = require("fs");
const path = require("path");
const { getContentPaths, getPath } = require("./utilities");
const { withOptions } = require("tailwindcss/plugin");

// TODO: Apply `flex flex-col` to the body

const colors = require("./colors");

const plugin = withOptions(
  function (options = {}) {
    return function ({ config, ...others }) {
      const shardPath = options.path || getShardPath() || null;

      if (!shardPath) {
        console.log("Using without Shard as it's not installed");
      }

      const paths = shardPath
        ? JSON.parse(
            fs.readFileSync(
              path.join(shardPath, "static", "paths.json"),
              "utf8"
            )
          )
        : [];

      const { files } = config("content");

      paths.forEach((file) => files.push(file));
    };
  },
  function () {
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
        colors: {
          ...colors,
          primary: colors.indigo,
        },
        fontSize: {
          ...["sm", "base", "lg"].reduce(
            (object, size) => ({
              ...object,
              [size]: defaultTheme.fontSize[size],
            }),
            {}
          ),
          xs: [
            "0.75rem",
            {
              lineHeight: "1.125rem",
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
