import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';

const colorOption = ['primary', 'secondary'];
const labelOption = ['right', 'left'];

storiesOf('Radio', module)
  .add('Demo', () => {
    const label = text('label', 'Radio Label')
    const selected = boolean('selected', true)
    const color = select('color', colorOption, 'primary')
    const disabled = boolean('disabled', false)
    const labelPos = select('label position', labelOption, 'right')
    
    return `
      <se-radio
        option='checkbox'
        label='${label}'
        selected='${selected}'
        color='${color}'
        disabled='${disabled}'
        label-pos='${labelPos}'></se-radio>
    `
  })