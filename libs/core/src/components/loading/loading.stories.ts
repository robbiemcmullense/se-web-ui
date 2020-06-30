import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';

const loaderOptions = ['standard', 'dialog'];
const loaderColors = ['primary', 'secondary'];
storiesOf('Loading', module)
  .add('demo', () => {
    const option = select('option', loaderOptions, 'standard')
    const color = select('color', loaderColors, 'primary')
    const message = text('message', "");

    return `
      <se-loading loading="true" option="${option}" color="${color}">${message}</se-loading>
    `
  })
