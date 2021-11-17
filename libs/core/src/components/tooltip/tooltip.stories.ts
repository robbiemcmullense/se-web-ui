import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmecontent from '../tooltip-content/readme.md';
import readmeheader from '../tooltip-header/readme.md';
import readmefooter from '../tooltip-footer/readme.md';
import { select, number } from '@storybook/addon-knobs';

const positionOptions = ['bottom', 'top', 'left', 'right'];
const actionOptions = ['hover', 'click'];
const colorOptions = ['alternative', 'information'];

storiesOf('Tooltip', module)
  .add(
    'Demo',
    () => {
      const position = select('position', positionOptions, 'bottom');
      const color = select('color', colorOptions, 'information');
      const delay = number('showDelay', 0);

      return `
      <div style=" margin-top: 200px; margin-left: 200px;">
        <se-tooltip position="${position}" color="${color}" show-delay="${delay}">
          <se-button option="raised" color="primary" slot="trigger">Tooltip</se-button>
          <se-tooltip-content>This is my tooltip.</se-tooltip-content>
        </se-tooltip>
        <br><br><br><br>
        <se-tooltip position="${position}" color="${color}" show-delay="${delay}">
          <se-icon color="primary" slot="trigger">folder</se-icon>
          <se-tooltip-content>This is my tooltip.</se-tooltip-content>
        </se-tooltip>
        <br><br><br><br>
        <se-tooltip position="${position}" color="${color}" show-delay="${delay}">
          <se-icon slot="trigger">folder</se-icon>
          <se-tooltip-content>This is my tooltip.</se-tooltip-content>
        </se-tooltip>
      </div>
    `;
    },
    {
      notes: {
        markdown: {
          'se-tooltip': readme,
          'se-tooltip-content': readmecontent,
          'se-tooltip-header': readmeheader,
          'se-tooltip-footer': readmefooter,
        },
      },
    }
  )
  .add(
    'complex',
    () => {
      const position = select('position', positionOptions, 'bottom');
      const color = select('color', colorOptions, 'information');

      return `
      <div style=" margin-top: 100px; margin-left: 200px;">
        <se-tooltip position="${position}" color="${color}">
          <se-button option="raised" color="primary" slot="trigger">Tooltip</se-button>
          <se-tooltip-header>my tooltips</se-tooltip-header>
          <se-tooltip-content>This is my tooltip. This is my tooltip. This is my tooltip. This is my tooltip. This is my tooltip.</se-tooltip-content>
          <se-tooltip-footer>
            <se-button option="outline" color="alternative">Call</se-button>
          </se-tooltip-footer>
        </se-tooltip>
      </div>
    `;
    },
    {
      notes: {
        markdown: {
          'se-tooltip': readme,
          'se-tooltip-content': readmecontent,
          'se-tooltip-header': readmeheader,
          'se-tooltip-footer': readmefooter,
        },
      },
    }
  )
  .add(
    'In layout',
    () => {
      return `
    <se-container position="absolute" direction="row" style="height: 600px">
    <se-block width="300px">
      <se-block-header>
        Left Column
        <se-tooltip slot="end">
          <se-icon color="secondary" slot="trigger">information_circle</se-icon>
          <se-tooltip-content>This is my tooltip.</se-tooltip-content>
        </se-tooltip>
        <se-dropdown slot="end">
          <se-button slot="trigger">My Site 1</se-button>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-list-item item="My Site 3"></se-list-item>
            <se-list-item item="My Site 4 is longer to demonstrate the dropdown's max width property."></se-list-item>
          </se-list>
        </se-dropdown>
      </se-block-header>
      <se-block-content>
        This is my block content. My width is 300px.
        <se-tooltip style="padding-top: 600px">
          <se-icon color="secondary" slot="trigger" >information_circle</se-icon>
          <se-tooltip-content> This is my tooltip. This is my tooltip. This is my tooltip. This is my tooltip.</se-tooltip-content>
        </se-tooltip>
        </br>
        <se-dropdown auto-hide style="padding-bottom: 600px">
          <se-button slot="trigger">My Site 1</se-button>
          <se-list option="dropdown">
            <se-list-item item="My Site 1"></se-list-item>
            <se-list-item item="My Site 2"></se-list-item>
            <se-list-item item="My Site 3"></se-list-item>
            <se-list-item item="My Site 4 is longer to demonstrate the dropdown's max width property."></se-list-item>
          </se-list>
        </se-dropdown>
      </se-block-content>
    </se-block>
    <se-divider option="vertical"></se-divider>
    <se-block>
      <se-block-header>
        Right Column
      </se-block-header>
      <se-block-content>
        This is my block content. My width is content-based.
      </se-block-content>
      <se-block-footer>
      <se-tooltip>
          <se-icon color="secondary" slot="trigger">information_circle</se-icon>
          <se-tooltip-content>This is my tooltip.</se-tooltip-content>
        </se-tooltip>
      </se-block-footer>
    </se-block>
  </se-container>
    `;
    },
    {
      notes: {
        markdown: {
          'se-tooltip': readme,
          'se-tooltip-content': readmecontent,
          'se-tooltip-header': readmeheader,
          'se-tooltip-footer': readmefooter,
        },
      },
    }
  );
