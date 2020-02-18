import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const loaderOptions = ['standard', 'dialog']

storiesOf('Loading', module)
  .add('demo', () => {
    const option = select('option', loaderOptions, 'standard')

    return `
      <se-loading loading="true" option="${option}"></se-loading>
    `
  })
