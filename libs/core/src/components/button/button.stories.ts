import { storiesOf } from '@storybook/html';
import { select, text, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

const buttonOption = ['flat', 'outline', 'text'];
const sizeOption = ['nano', 'small', 'medium', 'large'];
const colorOption = ['standard', 'alternative', 'primary', 'secondary'];
const paddingOption = ['none', 'small', 'medium', 'large'];

storiesOf('Button', module)
  .add(
    'Button',
    () => {
      const option = select('option', buttonOption, 'flat');
      const color = select('color', colorOption, 'primary');
      const size = select('size', sizeOption, 'small');
      const padding = select('padding', paddingOption, 'small');
      const icon = text('Icon', '');

      return `
        <div style="padding: 20px;display: flex; flex-flow: wrap;">
          <se-button option=${option} size=${size} color=${color} icon="${icon}" padding=${padding}>default</se-button>
          <se-button option=${option} selected size=${size} color=${color} icon="${icon}" padding=${padding}>selected</se-button>
          <se-button option=${option} size=${size} color=${color} icon="${icon}" padding=${padding} disabled>disabled</se-button>
        </div>
      `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Button icon-only',
    () => {
      const option = select('option', buttonOption, 'flat');
      const size = select('size', sizeOption, 'small');
      const color = select('color', colorOption, 'primary');
      const icon = text('Icon', 'about');

      return `
      <div style="padding: 20px;display: flex; flex-flow: wrap;">
        <se-button option=${option} icon-only size=${size} color=${color} icon="${icon}"></se-button>
        <se-button option=${option} icon-only size=${size} color=${color} selected icon="${icon}"></se-button>
        <se-button option=${option} icon-only size=${size} color=${color} icon="${icon}" disabled></se-button>
      </div>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
