const fs = require("fs");
const path = require("path");
const { withOptions } = require("tailwindcss/plugin");

const colors = require("./colors");
const extensions = require("./extensions");
const typography = require("./typography");

const { getShardPath, getShardStaticContentPaths } = require("./utilities");

const defaultPaletteOutputPath = path.join(
  process.cwd(),
  "config",
  "colors.json"
);

const plugin = withOptions(
  function (options = {}) {
    const paths = options.paths ?? {};

    const shard = paths.shard ?? getShardPath();

    if (!shard) {
      throw new Error("Shard is not installed");
    }

    return function ({ config }) {
      const paths = getShardStaticContentPaths(shard);
      const { files } = config("content");

      paths.forEach((file) => files.push(path.join(shard, file)));
    };
  },
  function (options = {}) {
    const paths = options.paths ?? {};
    const json = paths.json ?? defaultPaletteOutputPath;
    const palette = colors(options.colors);

    if (json) {
      fs.writeFileSync(json, JSON.stringify(palette, null, 2), "utf-8");
    }

    return {
      safelist: [
        // For the Badge component
        "bg-gray-100",
        "dark:bg-grayCool-800",

        // 50 is for the Badge component
        // 500 is for the Dot component
        {
          pattern: /^bg-\w+-(50|500)$/,
        },

        // 400 is for the Dot component
        // 900 is for the Badge component
        {
          pattern: /^bg-\w+-(400|900)$/,
          variants: ["dark"],
        },

        // For the Badge component
        {
          pattern: /^border-\w+-600$/,
        },

        // For the Badge component
        {
          pattern: /^border-\w+-300$/,
          variants: ["dark"],
        },

        // 600 is for the Paragraph component
        // 700 is for the Badge component
        {
          pattern: /^text-\w+-(600|700)$/,
        },

        // For the Paragraph component
        {
          pattern: /^text-\w+-(400)$/,
          variants: ["dark"],
        },

        // For the Badge component
        "dark:text-grayCool-200",

        // For the Badge component
        {
          pattern: /^text-\w+-100$/,
          variants: ["dark"],
        },
      ],
      theme: {
        colors: palette,
        fontSize: typography,
        extend: {
          ...extensions,
        },
      },
    };
  }
);

module.exports = plugin;
