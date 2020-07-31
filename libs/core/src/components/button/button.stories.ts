import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';

const buttonOption = ['flat', 'raised', 'outline'];
const sizeOption = ['small', 'medium', 'large'];
const colorOption = ['standard', 'alternative', 'primary', 'secondary'];

storiesOf('Button', module)
  .add('Button', () => {
    const option = select('option', buttonOption, 'flat');
    const color = select('color', colorOption, 'primary');
    const size = select('size', sizeOption, 'small');
    const icon = text('Icon', '');

    return `
    <div style="padding: 20px;display: flex; flex-flow: wrap;">
        <se-button option=${option} size=${size} color=${color} icon="${icon}">default</se-button>
        <se-button option=${option} selected size=${size} color=${color} icon="${icon}">selected</se-button>
        <se-button option=${option} size=${size} color=${color} icon="${icon}" disabled>disabled</se-button>
      </div>
    `;
  })
  .add('Button icon-only', () => {
    const size = select('size', sizeOption, 'small');
    const color = select('color', colorOption, 'primary');
    const icon = text('Icon', 'about');

    return `
      <div style="padding: 20px;display: flex; flex-flow: wrap;">
        <se-button icon-only size=${size} color=${color} icon="${icon}"></se-button>
        <se-button icon-only size=${size} color=${color} selected icon="${icon}"></se-button>
        <se-button icon-only size=${size} color=${color} icon="${icon}" disabled></se-button>
      </div>
    `;
  });
