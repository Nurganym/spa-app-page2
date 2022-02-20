const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "to-doList",
    projectName: "spa-app-page3",
    webpackConfigEnv,
    argv,
  });

  module.exports = {
    entry: './spa-app-page1/spa-app-page3/root.component.js',
  };

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
