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
        "bg-gray-100",
        {
          pattern: /^bg-\w+-(50|500)$/,
        },
        {
          pattern: /^border-\w+-(600)$/,
        },
        {
          pattern: /^text-\w+-(600|700)$/,
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
