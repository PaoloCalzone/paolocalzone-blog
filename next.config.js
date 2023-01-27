const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  /* i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
  }, */
  reactStrictMode: true,
};
module.exports = withContentlayer(nextConfig);
