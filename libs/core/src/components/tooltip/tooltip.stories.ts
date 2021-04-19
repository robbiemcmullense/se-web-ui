import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmecontent from '../tooltip-content/readme.md';
import readmeheader from '../tooltip-header/readme.md';
import readmefooter from '../tooltip-footer/readme.md';
import { select } from '@storybook/addon-knobs';

const positionOptions = ['bottom', 'top', 'left', 'right'];
const actionOptions = ['hover', 'click'];
const colorOptions = ['alternative', 'information'];

storiesOf('Tooltip', module)
  .add(
    'Demo',
    () => {
      const position = select('position', positionOptions, 'bottom');
      const color = select('color', colorOptions, 'information');

      return `
      <div style=" margin-top: 200px; margin-left: 200px;">
        <se-tooltip position="${position}" color="${color}">
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
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
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
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
      const position = select('position', positionOptions, 'bottom');

      return `
    <se-container position="absolute" direction="row">
    <se-block width="300px">
      <se-block-header>
        Left Column
        <se-tooltip slot="end">
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
          <se-tooltip-content>This is my tooltip.</se-tooltip-content>
        </se-tooltip>
      </se-block-header>
      <se-block-content>
        This is my block content. My width is 300px.
        <br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <se-tooltip ac>
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
          <se-tooltip-content> This is my tooltip. This is my tooltip. This is my tooltip. This is my tooltip.</se-tooltip-content>
        </se-tooltip>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
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
