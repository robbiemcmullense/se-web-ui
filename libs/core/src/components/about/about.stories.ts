import { storiesOf } from '@storybook/html';
import { text, select, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

const domainOption = ['ecostruxure', 'MySchneider'];
const copyrightText =
  'This application is protected by copyright law and international treaties. © 2020 Schneider Electric Industries SAS. All Rights Reserved.';

storiesOf('About', module).add(
  'Demo',
  () => {
    const title = text('app-title', 'My app Advisor');
    const version = text('version', '1.2.3');
    const useCustomVersion = boolean('custom version', false);
    const domain = select('domain', domainOption, 'ecostruxure');
    const copyright = text('copyright', copyrightText);
    const textHtml = text('custom text', '');

    return `
      <se-about
        app-title="${title}"
        version="${version}"
        domain="${domain}"
        copyright="${copyright}"
        image-url="url('https://schneider-electric.box.com/shared/static/7hp8f04wj8lclpxn8jonti616lvim3zl.jpg')">
        ${useCustomVersion ? `<div slot="version">Version number #${version}</div>` : ''}
        <div slot="custom-info">${textHtml}</div>
      </se-about>
  `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
