const { execSync } = require("child_process");

const getShardPath = () =>
  execSync(
    `bundle exec ruby -e "puts Bundler.rubygems.find_name('shard')&.first&.full_gem_path"`,
    {
      encoding: "utf-8",
    }
  ).trim();

module.exports = {
  getShardPath,
};
