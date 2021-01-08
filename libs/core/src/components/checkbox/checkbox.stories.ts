import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

const colorOption = ['primary', 'secondary', 'success', 'error'];
const backgroundOption = ['standard', 'alternative'];
const labelOption = ['right', 'left'];

storiesOf('Checkbox', module)
  .add(
    'Checkbox',
    () => {
      const label = text('label', 'This is a standard checkbox.');
      const selected = boolean('selected', true);
      const color = select('color', colorOption, 'primary');
      const disabled = boolean('disabled', false);
      const indeterminate = boolean('indeterminate', false);
      const labelPos = select('label position', labelOption, 'right');

      return `
      <se-checkbox
        option='checkbox'
        label='${label}'
        selected='${selected}'
        indeterminate='${indeterminate}'
        color='${color}'
        disabled='${disabled}'
        label-pos='${labelPos}'></se-checkbox>
      <div id="did-change-message"></div>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Checkbox toggle switch',
    () => {
      const label = text('label', 'This is a standard checkbox.');
      const selected = boolean('selected', true);
      const disabled = boolean('disabled', false);
      const labelPos = select('label position', labelOption, 'left');

      return `
    <se-checkbox
      option='switch'
      label='${label}'
      selected='${selected}'
      disabled='${disabled}'
      label-pos='${labelPos}'></se-checkbox>
    <div id="did-change-message"></div>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Checkbox on/off switch',
    () => {
      const label = text('label', 'This is a standard checkbox.');

      const selected = boolean('selected', false);
      const background = select('background', backgroundOption, 'standard');
      const disabled = boolean('disabled', false);
      const onText = text('"ON" Text', 'ON');
      const offText = text('"OFF" Text', 'OFF');
      const header = boolean('header', false);

      return `
        <se-checkbox
          label='${label}'
          option='onoff'
          selected='${selected}'
          background='${background}'
          disabled='${disabled}'
          text-on='${onText}'
          text-off='${offText}'
          header='${header}'></se-checkbox>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
