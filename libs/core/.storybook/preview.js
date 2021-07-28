import { configure, addDecorator, addParameters } from '@storybook/html';
import { addons } from '@storybook/addons';
import { DIR_CHANGE_EVENT } from '@pxblue/storybook-rtl-addon';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import { select } from '@storybook/addon-knobs';
import '@se/fonts/css/styles.css';
import '@se/icons/css/styles.css';
// for HTML storybook
// import { addReadme } from 'storybook-readme';

// // Issue: https://github.com/nrwl/nx/issues/2320
import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

applyPolyfills().then(() => {
  return defineCustomElements(window);
});

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

addDecorator(storyFn => {
  const app = document.createElement('se-app');
  app.theme = select('application theme', ['dark', 'light', 'auto'], 'auto');
  app.option = select(
    'application type',
    ['technical', 'website'],
    'technical'
  );

  const container = document.createElement('se-container');
  container.position = 'absolute';
  container.color = 'standard';
  container.display = 'block';

  const story = storyFn();

  if (typeof story === 'string') {
    container.innerHTML = story;
  } else {
    container.append(story);
  }

  app.append(container);

  return app;
});

addons.getChannel().addListener(DIR_CHANGE_EVENT, (dir) => {
  document.documentElement.setAttribute('dir', dir);
  addons.getChannel().emit(FORCE_RE_RENDER);
});