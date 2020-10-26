import { storiesOf } from '@storybook/html';
import { select, boolean, text, object } from '@storybook/addon-knobs';
import readme from './readme.md';
import readmeContent from '../dialog-content/readme.md';
import readmeFooter from '../dialog-footer/readme.md';
import readmeHeader from '../dialog-header/readme.md';

const configurationGroup = 'Configuration';
const mainTitleGroup = 'Main slot title';
const endTitleGroup = 'End slot title';

const sizeOptions = ['medium', 'small', 'large', 'fill'];
const colorOptions = ['primary', 'alternative'];
const defaultAttributes = { class: 'example-class' };

const createElement = (
  tagName = '',
  title = '',
  attributes = {},
  slot = ''
) => {
  let openTag = '';
  let closeTag = '';
  let attributesString = '';

  Object.getOwnPropertyNames(attributes).forEach(key => {
    attributesString = `${attributesString} ${key}="${attributes[key]}"`;
  });

  if (tagName) {
    openTag = `<${tagName}${attributesString}${slot}>`;
    closeTag = `</${tagName}>`;
  }

  return `${openTag}${title}${closeTag}`;
};

storiesOf('Dialog', module).add(
  'Dialog',
  () => {
    const size = select('size', sizeOptions, 'medium', configurationGroup);
    const color = select('color', colorOptions, 'primary', configurationGroup);
    const open = boolean('open', true, configurationGroup);
    const pageScroll = boolean('pageScroll', false, configurationGroup);
    const showMoreContent = boolean(
      'Show more content to scroll',
      false,
      configurationGroup
    );
    const canBackdrop = boolean('can backdrop', true, configurationGroup);
    const closeIcon = boolean('close icon', false, configurationGroup);

    const mainTitle = text('title', 'My awesome title', mainTitleGroup);
    const mainTitleTagName = text('tag name', '', mainTitleGroup);
    const mainTitleAttributes = object(
      'attributes',
      defaultAttributes,
      mainTitleGroup
    );

    const endTitle = text('title', 'My awesome title', endTitleGroup);
    const endTitleTagName = text('tag name', '', endTitleGroup);
    const endTitleAattributes = object(
      'attributes',
      defaultAttributes,
      endTitleGroup
    );

    return `
      <se-dialog open=${open} can-backdrop="${canBackdrop}" page-scroll="${pageScroll}" size="${size}" color="${color}" >
        <se-dialog-header close-icon="${closeIcon}">
          ${createElement(mainTitleTagName, mainTitle, mainTitleAttributes)}
          ${
            endTitleTagName &&
            createElement(
              endTitleTagName,
              endTitle,
              endTitleAattributes,
              'slot="end"'
            )
          }
        </se-dialog-header>
        <se-dialog-content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
          ${
            showMoreContent &&
            `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>`
          }
        </se-dialog-content>
        <se-dialog-footer>
          <se-button>OK</se-button>
          <se-button option="outline">Cancel</se-button>
        </se-dialog-footer>
      </se-dialog>
    `;
  },
  {
    notes: {
      markdown: {
        'se-dialog': readme,
        'se-dialog-content': readmeContent,
        'se-dialog-header': readmeHeader,
        'se-dialog-footer': readmeFooter,
      },
    },
  }
);
