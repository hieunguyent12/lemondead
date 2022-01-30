const withTM = require("next-transpile-modules")(["ui", "cors", "server"]);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
});
