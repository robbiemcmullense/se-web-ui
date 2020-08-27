import { storiesOf } from '@storybook/html';
import { select, number } from '@storybook/addon-knobs';

const alignmentOption = ['left', 'right'];
const verticalAlignmentOption = ['top', 'bottom'];

storiesOf('Dropdown', module)
  .add('Dropdown Button', () => {
    const alignment = select('alignment', alignmentOption, 'left');
    const verticalAlignment = select(
      'vertical alignment',
      verticalAlignmentOption,
      'bottom'
    );
    const maxWidth = number('max width', 200);
    const maxHeight = number('max height', 400);

    return `
      <div style="padding:100px;">
        <se-dropdown id="button-dropdown" alignment="${alignment}" vertical-alignment="${verticalAlignment}" max-width="${maxWidth}px" max-height="${maxHeight}px">
          <se-button slot="trigger">My Site 1</se-button>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-list-item item="My Site 3"></se-list-item>
            <se-list-item item="My Site 4 is longer to demonstrate the dropdown's max width property."></se-list-item>
          </se-list>
        </se-dropdown>
      </div>
    `;
  })
  .add('Dropdown Icon', () => {
    const alignment = select('alignment', alignmentOption, 'left');
    const verticalAlignment = select(
      'vertical alignment',
      verticalAlignmentOption,
      'bottom'
    );
    const maxWidth = number('max width', 200);
    const maxHeight = number('max height', 400);

    return `
      <div style="padding:100px;">
        <se-dropdown id="icon-dropdown" alignment="${alignment}" vertical-alignment="${verticalAlignment}" max-width="${maxWidth}px" max-height="${maxHeight}px">
          <se-icon slot="trigger" option="button" color="alternative">other_vertical</se-icon>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-divider></se-divider>
            <se-list-item item="My Site 3"></se-list-item>
            <se-list-item item="My Site 4 is longer to demonstrate the dropdown's max width property."></se-list-item>
          </se-list>
        </se-dropdown>
      </div>
    `;
  });
