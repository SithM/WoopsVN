const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // change importing css to less
    config
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#27ae60",
      "@layout-header-background": "#27ae60",
      "@success-color": "#27ae60",
      "@warning-color": "#f1c40f",
      "@error-color": "#e74c3c"
    },
    javascriptEnabled: true
  })(config, env);
  return config;
};
