import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const colorOption = ['standard', 'alternative'];

storiesOf('Divider', module)
  .add('Divider Horizontal', () => {
    const color = select('color', colorOption, 'standard');

    return `
      <div style="width: 500px; height: 100px; border: 1px solid gray;">
      </div>
      <se-divider style="padding: 10px;" option='horizontal' color='${color}'></se-divider>
      <div style="width: 500px; height: 100px; border: 1px solid gray;">
      </div>
      <div>The divider is between the two boxes.</div>
    `;
  })
  .add('Divider Vertical', () => {
    const color = select('color', colorOption, 'standard');

    return `
      <div style="display: flex; flex-direction: row;">
        <div style="width: 100px; height: 100px; border: 1px solid gray;">
        </div>
        <se-divider style="padding: 10px;" option='vertical' color='${color}'></se-divider>
        <div style="width: 100px; height: 100px; border: 1px solid gray;">
        </div>
      </div>
      <div>The divider is between the two boxes.</div>
    `;
  });
