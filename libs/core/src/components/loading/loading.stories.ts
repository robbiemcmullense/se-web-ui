import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, text, boolean } from '@storybook/addon-knobs';

const loaderOptions = ['standard', 'dialog'];
const loaderColors = ['primary', 'secondary'];
storiesOf('Loading', module).add(
  'Loading',
  () => {
    const option = select('option', loaderOptions, 'standard');
    const color = select('color', loaderColors, 'primary');
    const message = text('message', '');
    const overlay = boolean('overlay', false);

    return `
      <se-loading loading option="${option}" color="${color}" overlay="${overlay}">${message}</se-loading>
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
