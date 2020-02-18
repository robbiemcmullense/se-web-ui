import { storiesOf } from '@storybook/html';
import { text, select } from '@storybook/addon-knobs';

storiesOf('Icons', module)
  .add('standard icons', () => {
    const sizeOption = ["nano", "small", "medium", "large", "xlarge"];
    const colorOption = ["standard", "alternative", "primary", "secondary", "success", "warning", "error"];
    const size = select('size', sizeOption, 'small')
    const color= select('color', colorOption, 'primary')
    const icon = text('icon', 'action_settings1')

    return `
      <se-icon size="${size}" color="${color}">${icon}</se-icon>
    `
  })
  .add('Ecostruxure icon', () => {
    const ecostruxureSizes = ['small', 'medium']
    const ecostruxureColors = ['standard', 'inherited']
    const size = select('size', ecostruxureSizes, 'small')
    const color= select('color', ecostruxureColors, 'standard')

    return `
      <se-icon-ecostruxure size="${size}" color="${color}"></se-icon-ecostruxure>
    `
  })
  .add('Life Is On icon', () => {
    const colorOptions = ['standard', 'inherited']
    const color= select('color', colorOptions, 'standard')

    return `
      <se-icon-lifeison color="${color}"></se-icon-lifeison>
    `
  })
  .add('Schneider icon', () => {
    return `
      <se-icon-schneider></se-icon-schneider>
    `
  })