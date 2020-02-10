import { storiesOf } from '@storybook/html';

import { select, text } from '@storybook/addon-knobs';

const sizeOption = ['small', 'medium', 'large'];
const colorOption = ['standard', 'alternative', 'primary', 'secondary'];

storiesOf('Button', module)
  .add('Button', () => {
    const size = select('size', sizeOption, 'small');
    const color = select('color', colorOption, 'primary');
    const textHtml = text('Text', 'my button');
    const icon = text('Icon', '');

    return `
      <se-button size=${size} color=${color} icon="${icon}">${textHtml}</se-button>
    `;
  })
  .add('Button icon-only', () => {
    const size = select('size', sizeOption, 'small');
    const color = select('color', colorOption, 'primary');
    const icon = text('Icon', 'about');

    return `
      <se-button icon-only size=${size} color=${color} icon="${icon}"></se-button>
    `;
  });
