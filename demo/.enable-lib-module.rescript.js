const { getPaths, edit } = require("@rescripts/utilities");
const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// const isAliasSection = (inQuestion) =>
//   inQuestion && inQuestion.resolve && inQuestion.resolve.alias;

// module.exports = (config) => {
//   const aliasesPathes = getPaths(isAliasSection, config);

//   config = edit(
//     (alisesSection) => {
//       alisesSection["diagram-lib"] = path.resolve(__dirname, "../lib/build/");
//       console.log("Aliases: " + JSON.stringify(alisesSection));
//     },
//     aliasesPathes,
//     config
//   );

//   return config;
// };

const isResolvePluginsSection = (inQuestion) =>
  inQuestion && inQuestion.resolve && inQuestion.resolve.plugins;

module.exports = (config) => {
  const resolvePluginsPathes = getPaths(isResolvePluginsSection, config);

  config = edit(
    (resolvePluginsSection) => {
      resolvePluginsSection.push(new TsconfigPathsPlugin({}));
      console.log("Aliases: " + JSON.stringify(alisesSection));
    },
    resolvePluginsPathes,
    config
  );

  return config;
};

