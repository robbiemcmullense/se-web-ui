import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const colorOptions = ['primary', 'alternative'];
const tabBarOptions = ['nav', 'content'];
const overflowOptions = ['scroll', 'stack', 'compact'];

storiesOf('Tab Bar', module)
  .add('Demo', () => {
    const color = select('color', colorOptions, 'primary')
    const option = select('option', tabBarOptions, 'nav')
    const overflow = select('stack', overflowOptions, 'scroll')

    const start = (color === "primary" && option === "nav") ? `<nav slot="start"> <se-button option="inherit" icon="arrow2_left"> Back </se-button></nav>` : ''

    return `
      <se-tabbar color="${color}" option="${option}" overflow="${overflow}">
        <nav>
          <a class="active">Overview</a>
          <a>Analysis</a>
          <a>Report</a>
          <a disabled>Glossary & Index</a>
          <a>Notification</a>
        </nav>
      </se-tabbar>
      <br>
      <br>
      <se-tabbar color="${color}" option="${option}" overflow="${overflow}">
        ${start}
        <nav>
          <a class="active">Overview</a>
          <a>Analysis</a>
          <a>Report</a>
          <a disabled>Glossary & Index</a>
          <a>Notification</a>
          <a>Notification and other stuff</a>
        </nav>
        <nav slot="end">
          <se-button>open project</se-button>
        </nav>
      </se-tabbar>
    `
  })
