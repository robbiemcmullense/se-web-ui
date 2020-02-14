const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  // Return the altered config

  const tsPaths = new TsconfigPathsPlugin({
    configFile: "./tsconfig.json",
    logLevel: "info",
    extensions: [".ts", ".tsx"],
    mainFields: ["browser", "main"],
  });

  config.resolve.plugins
    ? config.resolve.plugins.push(tsPaths)
    : (config.resolve.plugins = [tsPaths]);

  return config;
};
