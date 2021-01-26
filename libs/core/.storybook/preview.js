import { configure, addDecorator, addParameters } from '@storybook/html';
// import { addons } from '@storybook/addons';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
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

const SCHNEIDER_ELECTRIC_VIEWPORTS = {
  xs: {
    name: 'SE Mobile',
    styles: {
      width: '320px',
      height: '568px',
    },
    type: 'mobile',
  },
  s: {
    name: 'SE Tablet',
    styles: {
      width: '720px',
      height: '801px',
    },
    type: 'tablet',
  },
  m: {
    name: 'SE Legacy Desktop',
    styles: {
      width: '980px',
      height: '700px',
    },
    type: 'desktop',
  },
  l: {
    name: 'SE Desktop',
    styles: {
      width: '1200px',
      height: '800px',
    },
    type: 'desktop',
  },
};

addParameters({
  viewport: {
    viewports: {
      ...SCHNEIDER_ELECTRIC_VIEWPORTS,
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator(
  story => `
  <se-app
    theme=${select('application theme', ['dark', 'light', 'auto'], 'auto')}
    option=${select('application type', ['technical', 'website'], 'technical')}>
    <se-container position="absolute" color="standard" display="block">
      ${story()}
    </se-container>
  </se-app>`
);

addDecorator(withKnobs);
addDecorator(withA11y);
