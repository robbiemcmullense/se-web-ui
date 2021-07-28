const path = require('path');

module.exports = {
  stories: ['../**/*.stories.ts'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-notes',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.(ts|tsx)?$/],
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    '@storybook/addon-actions',
    '@pxblue/storybook-rtl-addon/register',
  ],
};
