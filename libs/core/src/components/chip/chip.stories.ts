import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';

const sizeOption = ['nano', 'small'];
const colorOption = ['standard', 'alternative', ];

storiesOf('Chip', module)
  .add('Chip', () => {
    const value = text('value', 'My Chip');
    const size = select('size', sizeOption, 'small');
    const color = select('color', colorOption, 'standard');
    const canClose = boolean('can close', false)
    const selected = boolean('selected', false);
    const disabled = boolean('disabled', false)
    const block = boolean('block', false)

    return `
      <se-chip
        value='${value}'
        size='${size}'
        color='${color}'
        can-close='${canClose}'
        selected='${selected}'
        disabled='${disabled}'
        block='${block}'>
      </se-chip>
    `
  })