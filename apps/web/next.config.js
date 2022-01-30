const withTM = require("next-transpile-modules")(["ui", "cors"]);

module.exports = withTM({
  reactStrictMode: true,
});
