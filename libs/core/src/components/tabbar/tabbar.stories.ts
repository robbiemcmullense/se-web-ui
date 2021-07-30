import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, boolean } from '@storybook/addon-knobs';

const colorOptions = ['primary', 'alternative'];
const tabBarOptions = ['nav', 'content'];
const overflowOptions = ['scroll', 'stack', 'compact'];

storiesOf('Tab Bar', module)
  .add(
    'Simple tabbar',
    () => {
      const color = select('color', colorOptions, 'primary');
      const option = select('option', tabBarOptions, 'content');
      const overflow = select('stack', overflowOptions, 'scroll');
      const showWithButton = boolean('Show button at the end', true);

      return `
    <se-tabbar color="${color}" option="${option}" overflow="${overflow}">
      <nav>
        <a  title="Overview">Overview</a>
        <a class="active" title="Analysis">Analysis</a>
        <a title="Report">Report</a>
        <a disabled title="Glossary & Index">Glossary & Index</a>
        <a title="Notification">Notification</a>
        <a title="Notification">Notification</a>
        <a title="Notification">Notification</a>
        <a title="Notification">Notification</a>
        <a title="Notification">Notification</a>
        <a title="Notification and other stuff">Notification and other stuff</a>
      </nav>
      ${
        showWithButton
          ? `<nav slot="end">
        <se-button>open project</se-button>
      </nav>`
          : ''
      }
    </se-tabbar>
  `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'navigation',
    () => {
      const color = select('color', colorOptions, 'primary');
      const overflow = select('stack', overflowOptions, 'scroll');

      return `
      <se-tabbar color="${color}" overflow="${overflow}">
        <nav>
          <a>Overview</a>
          <a class="active" title="Analysis">
            Analysis
            <se-icon size="small">arrow2_right</se-icon>
          </a>
          <div class="sub-nav">
            <a class="active" title="Domain">Domain</a>
            <a title="technique">technique</a>
          </div>
          <a title="Report">Report</a>
          <a disabled title="Glossary & Index">Glossary & Index</a>
          <a title="Notification">Notification</a>
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
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
