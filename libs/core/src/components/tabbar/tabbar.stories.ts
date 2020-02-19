import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const colorOptions = ['primary', 'alternative'];
const tabBarOptions = ['nav', 'content'];

storiesOf('Tab Bar', module)
  .add('Demo', () => {
    const color = select('color', colorOptions, 'primary')
    const option = select('option', tabBarOptions, 'nav')

    return `
      <se-tabbar color="${color}" option="${option}">
        <nav>
          <a class="active">Overview</a>
          <a>Analysis</a>
          <a>Report</a>
          <a>Notification</a>
        </nav>
      </se-tabbar>
    `
  })