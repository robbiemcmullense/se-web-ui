import { configure, addDecorator } from '@storybook/html';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import '@se/fonts/css/styles.css';
import '@se/icons/css/styles.css';

// // Issue: https://github.com/nrwl/nx/issues/2320
// import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

// applyPolyfills().then(() => {
//   return defineCustomElements(window);
// });

addDecorator(story => `
  <se-app theme=${select('theme', ['dark', 'light', 'auto'], 'auto')}>
    <se-container position="absolute" color="standard" display="block">
      ${story()}
    </se-container>
  </se-app>`);
// addDecorator(story => `<se-app>${story()}</se-app>`);
addDecorator(withKnobs);
addDecorator(withA11y);

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
