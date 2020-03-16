import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';

const buttonOption = ['flat', 'raised', 'outline'];
const sizeOption = ['small', 'medium', 'large'];
const colorOption = ['standard', 'alternative', 'primary', 'secondary'];

storiesOf('Button', module)
  .add('Button', () => {
    const option = select('option', buttonOption, 'flat');
    const size = select('size', sizeOption, 'small');
    const color = select('color', colorOption, 'primary');
    const textHtml = text('Text', 'my button');
    const icon = text('Icon', '');
    const disabled = boolean('disabled', false)

    return `
    <div style="width: 100%; height: 100%; padding: 20px; background-color: #aaa">
        <se-button option=${option} size=${size} color=${color} icon="${icon}" disabled=${disabled}>${textHtml}</se-button>
      </div>
    `;
  })
  .add('Button icon-only', () => {
    const size = select('size', sizeOption, 'small');
    const color = select('color', colorOption, 'primary');
    const icon = text('Icon', 'about');
    const disabled = boolean('disabled', false)

    return `
      <div style="width: 100%; height: 100%; padding: 20px; background-color: #aaa">
        <se-button icon-only size=${size} color=${color} icon="${icon}" disabled=${disabled}></se-button>
      </div>
    `;
  });
