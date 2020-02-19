module.exports = (config) => {
  const babelConfig = require("@nrwl/react/plugins/bundle-babel")(config)
  babelConfig.plugins.push(["@babel/plugin-transform-destructuring", { "useBuiltIns": true }])
  return babelConfig
}

