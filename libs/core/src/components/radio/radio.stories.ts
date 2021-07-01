import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, text, boolean } from '@storybook/addon-knobs';

const colorOption = ['primary', 'secondary'];
const paddingOption = ['none', 'small', 'medium', 'large'];
const labelOption = ['right', 'left'];

storiesOf('Radio', module).add(
  'Demo',
  () => {
    const label = text('label', 'Radio Label');
    const selected = boolean('selected', true);
    const color = select('color', colorOption, 'primary');
    const padding = select('padding', paddingOption, 'small');
    const disabled = boolean('disabled', false);
    const labelPos = select('label position', labelOption, 'right');

    return `
      <se-radio
        option='checkbox'
        label='${label}'
        selected='${selected}'
        color='${color}'
        padding='${padding}'
        disabled='${disabled}'
        label-pos='${labelPos}'></se-radio>
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
