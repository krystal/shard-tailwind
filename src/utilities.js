const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const getShardContentPaths = (directory) =>
  JSON.parse(
    fs.readFileSync(path.join(directory, "static", "paths.json"), "utf8")
  );

const getShardPath = () =>
  execSync(
    `bundle exec ruby -e "puts Bundler.rubygems.find_name('shard')&.first&.full_gem_path"`,
    {
      encoding: "utf-8",
    }
  ).trim();

const prefixKey = (key, prefix) => [prefix, titleize(key)].join("");

const prefixKeys = (palettes, prefix) =>
  palettes.reduce((o, [k, v]) => {
    return {
      ...o,
      [prefixedKey(k, prefix)]: v,
    };
  }, {});

const titleize = (string) =>
  `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;

module.exports = {
  getShardContentPaths,
  getShardPath,
  prefixKey,
  prefixKeys,
  titleize,
};
