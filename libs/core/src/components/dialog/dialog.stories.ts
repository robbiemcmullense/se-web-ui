import { storiesOf } from '@storybook/html';
import { select, boolean, text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import readme from './readme.md';
import readmeContent from '../dialog-content/readme.md';
import readmeFooter from '../dialog-footer/readme.md';
import readmeHeader from '../dialog-header/readme.md';

const configurationGroup = 'Configuration';
const headerConfigurationGroup = 'Header configuration';
const contentConfigurationGroup = 'Content configuration';
const mainTitleGroup = 'Main slot title';
const endTitleGroup = 'End slot title';

const sizeOptions = ['medium', 'small', 'large', 'fill'];
const colorOptions = ['standard', 'alternative', 'primary', 'secondary', 'information'];
const headerPaddingOptions = ['small', 'large'];
const contentPaddingOptions = ['none', 'small', 'large'];
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
    const noBackdrop = boolean('no backdrop', false, configurationGroup);
    const pageScroll = boolean('pageScroll', false, configurationGroup);
    const open = boolean('open', true, configurationGroup);

    const showMoreContent = boolean(
      'Show more content to scroll',
      false,
      configurationGroup
    );

    const showFooter = boolean('Enable footer', false, configurationGroup);

    const headerColor = select('color', colorOptions, 'primary', headerConfigurationGroup);
    const headerPadding = select('padding', headerPaddingOptions, 'small', headerConfigurationGroup);
    const closeIcon = boolean('close icon', false, headerConfigurationGroup);

    const icon = text('icon', '', contentConfigurationGroup);
    const contentPadding = select('padding', contentPaddingOptions, 'small', contentConfigurationGroup);
    const iconColor = select('icon color', colorOptions, 'primary', contentConfigurationGroup);

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




    document.addEventListener('didClose', e =>
      action('didClose')((e as CustomEvent).detail)
    );

    return `
      <se-dialog open=${open} no-backdrop="${noBackdrop}" page-scroll="${pageScroll}" size="${size}">
        <se-dialog-header
          color="${headerColor}"
          padding="${headerPadding}"
          close-icon="${closeIcon}"
        >
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
        <se-dialog-content
        icon="${icon}"
        icon-color="${iconColor}"
        padding="${contentPadding}"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</p>
          <se-tooltip>
            <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
            This is my tooltip in a dialog
          </se-tooltip>
          ${
            showMoreContent
              ? `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
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
              : ''
          }
        </se-dialog-content>
        ${
          showFooter
            ? `<se-dialog-footer>
            <se-button>OK</se-button>
            <se-button option="outline">Cancel</se-button>
          </se-dialog-footer>`
            : ''
        }
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
