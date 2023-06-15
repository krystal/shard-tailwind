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

module.exports = {
  getShardContentPaths,
  getShardPath,
};
