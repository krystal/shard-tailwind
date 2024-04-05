const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const getShardPath = () => {
  return execSync(
    `bundle exec ruby -e "puts Bundler.rubygems.find_name('shard')&.first&.full_gem_path"`,
    {
      encoding: "utf-8",
    }
  ).trim();
};

const getShardStaticContentPaths = (directory) => {
  return JSON.parse(
    fs.readFileSync(path.join(directory, "static", "paths.json"), "utf8")
  );
};

const prefixKey = (key, prefix) => {
  return [prefix, titleize(key)].join("");
};

const prefixKeys = (palettes, prefix) => {
  return palettes.reduce((o, [k, v]) => {
    return {
      ...o,
      [prefixedKey(k, prefix)]: v,
    };
  }, {});
};

const titleize = (string) => {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;
};

module.exports = {
  getShardStaticContentPaths,
  getShardPath,
  prefixKey,
  prefixKeys,
  titleize,
};
