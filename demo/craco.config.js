module.exports = {
  webpack: {
    alias: {},
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (p) => p.constructor.name !== "ModuleScopePlugin"
      );

      // webpackConfig.resolve.plugins.forEach(element => {
      //   console.log(element.constructor.name);
      // });
      webpackConfig.resolve.alias = {
        "diagram-lib": "../lib/build",
      };

      return webpackConfig;
    },
  },
};
