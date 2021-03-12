import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';
import { size } from './contstants';

const colorOption = ['primary', 'secondary', 'success'];
const labelOption = ['right', 'left'];
const checkboxSizeOptions = Object.values(size);

storiesOf('Checkbox', module)
  .add(
    'Checkbox',
    () => {
      const label = text('label', 'This is a standard checkbox.');
      const labelSuffix = text('label suffix', '321');
      const selected = boolean('selected', true);
      const color = select('color', colorOption, 'primary');
      const disabled = boolean('disabled', false);
      const indeterminate = boolean('indeterminate', false);
      const labelPos = select('label position', labelOption, 'right');
      const checkboxSize = select(
        'checkbox size',
        checkboxSizeOptions,
        size.SMALL
      );

      return `
      <se-block width="300px" color="none">
        <se-checkbox
          option='checkbox'
          label='${label}'
          selected='${selected}'
          indeterminate='${indeterminate}'
          color='${color}'
          disabled='${disabled}'
          label-pos='${labelPos}'
          label-suffix='${labelSuffix}'
          size='${checkboxSize}'
        ></se-checkbox>
        <se-divider></se-divider>
        <se-checkbox
          option='checkbox'
          label='This is a standard checkbox with a very long text that goes to the next line!!!'
          selected='${selected}'
          indeterminate='${indeterminate}'
          color='${color}'
          disabled='${disabled}'
          label-pos='${labelPos}'
          label-suffix='${labelSuffix}'
          size='${checkboxSize}'
        ></se-checkbox>
      </se-block>
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
      const disabled = boolean('disabled', false);
      const onText = text('"ON" Text', 'ON');
      const offText = text('"OFF" Text', 'OFF');
      const header = boolean('header', false);
      const labelPos = select('label position', labelOption, 'right');

      return `
        <se-checkbox
          label='${label}'
          option='onoff'
          selected='${selected}'
          disabled='${disabled}'
          text-on='${onText}'
          text-off='${offText}'
          header='${header}'
          label-pos='${labelPos}'></se-checkbox>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
