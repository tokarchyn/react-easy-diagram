const CracoAlias = require("craco-alias");

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (p) => {
          console.log(p.constructor.name);
          return p.constructor.name !== "ModuleScopePlugin";
        }
      );
      return webpackConfig;
    },
  },
   plugins: [
     {
        plugin: CracoAlias,
        options: {
           source: "tsconfig",
           // baseUrl SHOULD be specified
           // plugin does not take it from tsconfig
           baseUrl: "./src",
           /* tsConfigPath should point to the file where "baseUrl" and "paths" 
           are specified*/
           tsConfigPath: "./tsconfig.paths.json"
        }
     }
  ]
};