import {
  storiesOf
} from '@storybook/html';

import {
  withKnobs,
} from '@storybook/addon-knobs';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    return `
      <se-header></se-header>
    `;
  })
  .add('Header with side menu', () => {

    return `
      <se-header></se-header>
    `;
  });
