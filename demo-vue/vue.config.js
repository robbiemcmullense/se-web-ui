module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("html-loader")
      .loader("html-loader");
  }
};
