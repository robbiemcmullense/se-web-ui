const path = require('path');

module.exports = {
  stories: ['../**/*.stories.ts'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-notes',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.ts?$/],
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    '@storybook/addon-actions',
  ],
};
