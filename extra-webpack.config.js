const webpackMerge = require('webpack-merge');
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options);

  

  // Feel free to modify this webpack config however you'd like to
  return webpackMerge.smart(singleSpaWebpackConfig, {
    // Remove library that are part of the import-map to reduce micro-app size
    externals: {
      '@se/web-ui': '@se/web-ui',
    },
    resolve: {
      alias: {
        // To mock the @se/web-ui/loader so it's not going to be imported by each micro-app library
        '@se/web-ui/loader': '@se/web-ui/loader/node-main.js',
      }
    }
  });
}