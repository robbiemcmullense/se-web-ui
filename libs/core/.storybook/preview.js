import { configure, addDecorator, addParameters } from '@storybook/html';
// import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import '@se/fonts/css/styles.css';
import '@se/icons/css/styles.css';
// for HTML storybook
// import { addReadme } from 'storybook-readme';

// // Issue: https://github.com/nrwl/nx/issues/2320
// import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

// applyPolyfills().then(() => {
//   return defineCustomElements(window);
// });

addDecorator(
  story => `
  <se-app theme=${select('theme', ['dark', 'light', 'auto'], 'auto')}>
    <se-container position="absolute" color="standard" display="block">
      ${story()}
    </se-container>
  </se-app>`
);

addDecorator(withKnobs);
addDecorator(withA11y);
