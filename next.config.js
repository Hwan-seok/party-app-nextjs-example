/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
require('dotenv').config();

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/index' },
    };
  },
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },

  publicRuntimeConfig: {
    BASE_SERVER_URL: process.env.BASE_SERVER_URL,
  },
};
