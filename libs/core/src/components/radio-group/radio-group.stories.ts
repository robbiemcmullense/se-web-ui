import { storiesOf } from '@storybook/html';
import { select, boolean } from '@storybook/addon-knobs';

const colorOptions = ['standard', 'alternative', 'primary', 'secondary'];
const sizeOptions = ['small', 'nano'];

storiesOf('Radio Group', module)
  .add('Group of Radio Buttons', () => {
    const radioOptions = ['primary', 'secondary']
    const valueOptions = ['none', 'first', 'second', 'third']
    const color = select('color', radioOptions, 'standard')
    const disabled = boolean('disabled', false)
    const value = select('value', valueOptions, 'none')

    return `
      <se-radio-group color="${color}" disabled="${disabled}" value="${value}">
        <se-radio value="first" label="Radio Label 1"></se-radio>
        <se-radio value="second" label="Radio Label 2"></se-radio>
        <se-radio value="third" label="Radio Label 3"></se-radio>
      </se-radio-group>
    `
  })
  .add('Group of Regular Buttons', () => {
    const valueOptions = ['none', 'first', 'second', 'third']
    const color = select('color', colorOptions, 'standard')
    const size = select('size', sizeOptions, 'small')
    const disabled = boolean('disabled', false)
    const value = select('value', valueOptions, 'none')

    return `
      <div style="width: 100%; height: 100%; padding: 20px; background-color: #d0d0d0">
        <se-radio-group color="${color}" size="${size}" disabled="${disabled}" value="${value}">
          <se-button value="first">Check1</se-button>
          <se-button value="second">Check2</se-button>
          <se-button value="third">Check3</se-button>
        </se-radio-group>
      </div>
    `
  })
  .add('Group of Regular Buttons with Icons', () => {
    const valueOptions = ['none', 'left', 'up', 'down', 'right']
    const color = select('color', colorOptions, 'standard')
    const size = select('size', sizeOptions, 'small')
    const disabled = boolean('disabled', false)
    const value = select('value', valueOptions, 'none')

    return `
      <div style="width: 100%; height: 100%; padding: 20px; background-color: #d0d0d0">
        <se-radio-group color="${color}" size="${size}" disabled="${disabled}" value="${value}">
          <se-button value="left" icon="arrow2_left"></se-button>
          <se-button value="up" icon="arrow2_up"></se-button>
          <se-button value="down" icon="arrow2_down"></se-button>
          <se-button value="right" icon="arrow2_right"></se-button>
        </se-radio-group>
      </div>
    `
  })