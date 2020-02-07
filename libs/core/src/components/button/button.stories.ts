import {
  storiesOf
} from '@storybook/html';

import {
  select,
  withKnobs,
  text
} from '@storybook/addon-knobs';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    // const label = 'Score';
    // const defaultValue = 1;
    // const options = {
    //   range: true,
    //   min: 1,
    //   max: 4,
    //   step: 1,
    // };
    const size = select('size', { 'small': 'small', 'medium': 'medium', 'large': 'large'}, 'small');
    const color = select('color', {'standard': 'standard', 'alternative': 'alternative', 'primary': 'primary', 'secondary': 'secondary'}, 'primary');
    const textHtml = text('Text', 'my button')
    const icon = text('Icon', "")

    return `
      <se-button size=${size} color=${color} icon="${icon}" id="button1">${textHtml}</se-button>
    `;
  })
  .add('button with icon', () => {
    const size = select('size', { 'small': 'small', 'medium': 'medium', 'large': 'large'}, 'medium');
    const color = select('color', {'standard': 'standard', 'alternative': 'alternative', 'primary': 'primary', 'secondary': 'secondary'}, 'primary');
    const textHtml = text('Text', 'my button')
    const icon = text('Icon', 'about')

    return `
      <se-button size=${size} color=${color} icon="${icon}" id="button">${textHtml}</se-button>
    `;
  });
