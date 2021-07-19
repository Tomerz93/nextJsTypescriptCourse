const { withFrameWorkConfig } = require('./framework/common/config');

const defaultConfig = {
  framework: {
    name: 'shopify',
  },
  i18n: {
    locales: ['en-us', 'es'],
    defaultLocale: 'en-us',
  },
  reactStrictMode: true,
};

module.exports = withFrameWorkConfig(defaultConfig);
