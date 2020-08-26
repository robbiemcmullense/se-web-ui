const path = require('path');

module.exports = {
  addons: [{
    name: '@storybook/addon-storysource',
    options: {
      rule: {
        // test: [/\.stories\.jsx?$/], This is default
        include: [path.resolve(__dirname, '../src/**/*.stories.ts')], // You can specify directories
      },
      loaderOptions: {
        prettierConfig: { printWidth: 80, singleQuote: false },
      },
    },
  },
  '@storybook/addon-actions'
]
};
