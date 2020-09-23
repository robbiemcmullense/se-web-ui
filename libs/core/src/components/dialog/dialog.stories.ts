import { storiesOf } from '@storybook/html';
import { select, boolean, text, object } from '@storybook/addon-knobs';

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

storiesOf('Dialog', module).add('Demo', () => {
  const size = select('size', sizeOptions, 'medium', configurationGroup);
  const color = select('color', colorOptions, 'primary', configurationGroup);
  const open = boolean('open', true, configurationGroup);
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
      <se-dialog open=${open} can-backdrop="${canBackdrop}" size="${size}" color="${color}" >
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
        <se-dialog-content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </se-dialog-content>
        <se-dialog-footer>
          <se-button>Cancel</se-button>
          <se-button>OK</se-button>
        </se-dialog-footer>
      </se-dialog>
    `;
});
