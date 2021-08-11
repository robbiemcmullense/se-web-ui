import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';
import readme from './readme.md';

const colorOption = ['standard', 'alternative'];
const directionOption = ['horizontal', 'vertical'];

storiesOf('Divider', module)
  .add(
    'Divider',
    () => {
      const color = select('color', colorOption, 'standard');
      const direction = select('option', directionOption, 'horizontal');

      return `
      <se-container direction="${direction === 'horizontal' ? 'column' : 'row' }">
        <se-block margin="large">
          <div>first block</div>
        </se-block>
        <se-divider style="padding: 10px;" option='${direction}' color='${color}'></se-divider>
        <se-block margin="large">
          <div>second block</div>
        </se-block>
      </se-container>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
