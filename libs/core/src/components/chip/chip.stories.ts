import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

const sizeOption = ['nano', 'small'];
const colorOption = ['standard', 'alternative'];

storiesOf('Chip', module).add(
  'Chip',
  () => {
    const value = text('value', 'My Chip');
    const size = select('size', sizeOption, 'small');
    const color = select('color', colorOption, 'standard');
    const canClose = boolean('can close', false);
    const selected = boolean('selected', false);
    const disabled = boolean('disabled', false);
    const block = boolean('block', false);
    const readonly = boolean('readonly', false);

    document.addEventListener('didClose', () => {
      document.getElementById('close-chip-message').innerText =
        'se-chip didClose event emitted';
    });

    return `
      <div style="padding: 20px">
        <se-chip
          value='${value}'
          size='${size}'
          color='${color}'
          can-close='${canClose}'
          selected='${selected}'
          disabled='${disabled}'
          readonly='${readonly}'
          block='${block}'>
        </se-chip>
        <div id="close-chip-message"></div>
      </div>
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
