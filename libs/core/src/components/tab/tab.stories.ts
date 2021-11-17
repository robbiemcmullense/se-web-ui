import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmeItem from '../tab-item/readme.md';
import { select, boolean } from '@storybook/addon-knobs';

const tabOptions = ['navigation', 'content', 'anchor'];
const overflowOptions = ['scroll', 'stack', 'compact'];

storiesOf('Tab', module).add(
  'Tab',
  () => {
    const option = select('option', tabOptions, 'navigation');
    const overflow = select('overflow', overflowOptions, 'scroll');
    const showWithButton = boolean('Show button at the end', true);
    const showMoreItem = boolean('Show more items (scroll)', true);

    return `
        <se-tab option="${option}" overflow="${overflow}">
          <se-tab-item>item 1</se-tab-item>
          <se-tab-item>item with some long text</se-tab-item>
          <se-tab-item selected="true">item 2</se-tab-item>
          <se-tab-item>item with some long text</se-tab-item>
          ${
            showMoreItem
              ? `
              <se-tab-item >item 4</se-tab-item>
              <se-tab-item><se-icon slot="start">folder</se-icon> item with an icon</se-tab-item>
              <se-tab-item >item 6</se-tab-item>
              <se-tab-item><se-icon slot="start">folder</se-icon> item with an icon</se-tab-item>
              <se-tab-item><se-icon slot="start">folder</se-icon> item with an icon</se-tab-item>
              <se-tab-item><se-icon slot="start">folder</se-icon> item with an icon</se-tab-item>`
              : ''
          }
          ${
            showWithButton
              ? `<nav slot="end">
                  <se-button>open project</se-button>
                </nav>`
              : ''
          }
        </se-tab>
  `;
  },
  {
    notes: {
      markdown: {
        'se-tab': readme,
        'se-tab-item': readmeItem,
      },
    },
  }
);
