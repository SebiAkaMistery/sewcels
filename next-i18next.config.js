const path = require('path');

module.exports = {
  i18n: {
    locales: ['ro', 'en'],
    defaultLocale: 'ro',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};