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
  .add('with search', () => {
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
        <div slot="edge">
          <div style="display:flex; align-items: center;">
            <se-icon size="medium" option="button" style="padding: 0 4px;">
              action_search_stroke
            </se-icon>
            <se-form-field option="stacked" block>
              <div class="with-icon" style="margin-top:-4px;">
                <input
                  style="width:150px"
                  autoComplete="off"
                  name="query"
                  placeholder="Search"
                  aria-autocomplete="list"
                  aria-controls="search-menu"
                />
                <se-icon option="button" color="alternative">action_close</se-icon>
              </div>
            </se-form-field>
          </div>
        </div>
      </se-tabbar>
    `
  })
