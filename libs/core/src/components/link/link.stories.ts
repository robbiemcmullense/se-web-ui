import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, text, boolean } from '@storybook/addon-knobs';

const linkOption = ['internal', 'external'];
const spacingOption = ['none', 'small'];

storiesOf('Link', module).add(
  'Link',
  () => {
    const textHtml = text('Link Text', 'Link to Google');
    const option = select('option', linkOption, 'internal');
    const disabled = boolean('disabled', false);
    const url = text('url', 'http://google.com');
    const spacing = select('spacing', spacingOption, 'small');

    return `
      <se-link option='${option}' disabled='${disabled}' spacing=${spacing} url='${url}'>${textHtml}</se-link>
      <br>
      <se-link option='${option}' disabled='${disabled}' spacing=${spacing} url='${url}'><se-icon>folder</se-icon>${textHtml}</se-link>
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
