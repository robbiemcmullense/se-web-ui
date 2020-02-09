import { storiesOf } from '@storybook/html';
import { text } from '@storybook/addon-knobs';

// const TITLE = text('app-title', "My cool advisor")

storiesOf('Header', module)
  .add('Simple', () => {

    const title = text('app-title', "My cool advisor")

    return `
      <se-header appTitle="${title}"></se-header>
    `;
  })
  .add('Header with side menu', () => {
    const title = text('app-title', "My cool advisor")

    return `
      <se-header app-title="${title}"></se-header>
    `;
  });
