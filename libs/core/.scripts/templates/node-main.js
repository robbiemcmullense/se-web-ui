// Provide a way to externalize the web-ui library when creating a library based on the web-ui
// Used by micro-app and UIaaS library

module.exports.applyPolyfills = function () {
  return Promise.resolve();
};
module.exports.defineCustomElements = function () {
  return Promise.resolve();
};
