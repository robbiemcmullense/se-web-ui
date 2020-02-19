// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  const copyWebpackPlugin = new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../dist/libs/core'),
      to: path.posix.join('static', ''),
      ignore: ['.*']
    },
  ]);

  if (config.plugins) {
    config.plugins.push(copyWebpackPlugin);
  } else {
    config.plugins = [
      copyWebpackPlugin
    ];
  }



  return config;
};

