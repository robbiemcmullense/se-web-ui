import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, number } from '@storybook/addon-knobs';

const alignmentOption = ['left', 'right'];
const verticalAlignmentOption = ['top', 'bottom'];
const actionOption = ['click', 'hover'];

storiesOf('Dropdown', module)
  .add(
    'Dropdown Button',
    () => {
      const alignment = select('alignment', alignmentOption, 'left');
      const verticalAlignment = select(
        'vertical alignment',
        verticalAlignmentOption,
        'bottom'
      );
      const maxWidth = number('max width', 200);
      const maxHeight = number('max height', 400);
      const action = select('action', actionOption, 'click');

      return `
      <div style="padding:150px;">
        <se-dropdown id="button-dropdown" action="${action}" alignment="${alignment}" vertical-alignment="${verticalAlignment}" max-width="${maxWidth}px" max-height="${maxHeight}px">
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
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Dropdown Icon',
    () => {
      const maxWidth = number('max width', 200);
      const maxHeight = number('max height', 400);

      return `
      <div style="left:20px; top: 20px;position:absolute;">
        <se-dropdown id="icon-dropdown" alignment="left" max-width="${maxWidth}px" max-height="${maxHeight}px">
          <se-icon slot="trigger" option="button">other_vertical</se-icon>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-divider></se-divider>
            <se-list-item item="My Site 3"></se-list-item>
            <se-list-item item="My Site 4 is longer to demonstrate the dropdown's max width property."></se-list-item>
          </se-list>
        </se-dropdown>
      </div>
      <div style="right:20px; top: 20px;position:absolute;">
        <se-dropdown id="icon-dropdown" alignment="right" max-width="${maxWidth}px" max-height="${maxHeight}px">
          <se-icon slot="trigger" option="button">other_vertical</se-icon>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-divider></se-divider>
            <se-list-item item="My Site 3"></se-list-item>
            <se-list-item item="My Site 4 is longer to demonstrate the dropdown's max width property."></se-list-item>
          </se-list>
        </se-dropdown>
      </div>
      <div style="bottom:20px; right: 20px;position:absolute;">
        <se-dropdown id="icon-dropdown" alignment="right" max-width="${maxWidth}px" max-height="${maxHeight}px">
          <se-icon slot="trigger" option="button">other_vertical</se-icon>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-divider></se-divider>
            <se-list-item item="My Site 3"></se-list-item>
            <se-list-item item="My Site 4 is longer to demonstrate the dropdown's max width property."></se-list-item>
          </se-list>
        </se-dropdown>
      </div>
      <div style="left:20px; bottom: 20px;position:absolute;">
        <se-dropdown id="icon-dropdown" alignment="left" max-width="${maxWidth}px" max-height="${maxHeight}px">
          <se-icon slot="trigger" option="button">other_vertical</se-icon>
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
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
