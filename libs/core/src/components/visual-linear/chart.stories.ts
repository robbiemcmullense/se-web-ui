import { storiesOf } from '@storybook/html';
import { text, select, number } from '@storybook/addon-knobs';

const displayOptions = ['inline', 'stacked'];
const sizeOptions = ['large', 'small'];
const percentageOptions = {
  range: true,
  min: 0,
  max: 100,
  step: 1
}

storiesOf('Chart', module)
  .add('Linear', () => {
    const option = select('option', displayOptions, 'stacked')
    const label = text('label', 'Done')
    const percent = number('percentage', 50, percentageOptions)
    const color = text('secolor', 'primary')
    const value = text('value', '40 / 360')

    return `
      <div style="padding: 40px;">
        <se-visual-linear
          option="${option}"
          label="${label}"
          percentage="${percent}"
          secolor="${color}"
          value="${value}"></se-visual-linear>
      </div>
    `
  })
  .add('Radial', () => {
    const size = select('option', sizeOptions, 'large')
    const label = text('label', 'Done')
    const percent = number('percentage', 50, percentageOptions)
    const color = text('secolor', 'primary')
    const value = text('value', '44')

    return `
      <div style="padding: 40px;">
        <se-visual-radial
          size="${size}"
          label="${label}"
          percentage="${percent}"
          secolor="${color}"
          value="${value}"></se-visual-radial>
      </div>
    `
  })
