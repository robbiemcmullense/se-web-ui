import {
  storiesOf
} from '@storybook/html';

import {
  select,
  text
} from '@storybook/addon-knobs';



storiesOf('Button', module)
  .add('Button', () => {
    const  props = {
      size: select('size', ['small', 'medium', 'large'], 'small'),
      color: select('color', ['standard', 'alternative', 'primary', 'secondary'], 'primary'),
      textHtml: text('Text', 'my button'),
      icon: text('Icon', "")
    }
    const {size, color, textHtml, icon} = props;

    return `
      <se-button size=${size} color=${color} icon="${icon}">${textHtml}</se-button>
    `;
  })
  .add('button with icon', () => {

    const  props = {
      size: select('size', ['small', 'medium', 'large'], 'small'),
      color: select('color', ['standard', 'alternative', 'primary', 'secondary'], 'primary'),
      textHtml: text('Text', 'my button'),
      icon: text('Icon', "")
    }
    const {size, color, textHtml} = props;

    const icon = text('Icon', "")

    return `
      <se-button size=${size} color=${color} icon="${icon}">${textHtml}</se-button>
    `;
  });
