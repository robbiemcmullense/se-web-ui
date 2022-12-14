import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmesidemenu from '../sidemenu/readme.md';
import readmesidemenuitem from '../sidemenu-item/readme.md';
import { text, select } from '@storybook/addon-knobs';

const domainOption = ['ecostruxure', 'MySchneider'];

storiesOf('Header', module)
  .add(
    'Simple',
    () => {
      const title = text('app-title', 'My cool advisor');
      const project = text('project', 'Project awesome');
      const domain = select('domain', domainOption, 'ecostruxure');

      return `
      <se-header app-title="${title}" project="${project}" domain="${domain}"></se-header>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Header with custom title',
    () => {
      const project = text('project', 'Project awesome');

      return `
      <se-header project="${project}">
        <span slot="title" class="color-primary bold">Custom title</span>
      </se-header>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Header with side menu',
    () => {
      const title = text('app-title', 'My cool advisor');
      const project = text('project', 'Project awesome');
      const domain = select('domain', domainOption, 'ecostruxure');
      const link = text('link', 'www.se.com/en/partners');

      return `
      <se-header app-title="${title}" project="${project}" domain="${domain}">
        <se-sidemenu id="main-sidemenu" link="${link}">
          <se-sidemenu-item item="About" id="side-about">
            <se-about app-title="Test Advisor" version="1.2.3"
              image-url="url('https://schneider-electric.box.com/shared/static/7hp8f04wj8lclpxn8jonti616lvim3zl.jpg')">
            </se-about>
          </se-sidemenu-item>
          <se-sidemenu-item item="Settings">
            <div>Place your settings here</div>
          </se-sidemenu-item>
        </se-sidemenu>
      </se-header>
      <se-tabbar></se-tabbar>
      `;
    },
    {
      notes: {
        markdown: {
          'se-header': readme,
          'se-sidemenu': readmesidemenu,
          'se-sidemenu-item': readmesidemenuitem,
        },
      },
    }
  );
