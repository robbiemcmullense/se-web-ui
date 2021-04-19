import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmecontent from '../tooltip-content/readme.md';
import readmeheader from '../tooltip-header/readme.md';
import readmefooter from '../tooltip-footer/readme.md';
import { select } from '@storybook/addon-knobs';

const positionOptions = ['bottom', 'top', 'left', 'right'];
const actionOptions = ['hover', 'click'];

storiesOf('Tooltip', module)
  .add(
    'Demo',
    () => {
      const position = select('position', positionOptions, 'bottom');
      const action = select('action', actionOptions, 'hover');

      return `
      <div style=" margin-top: 200px; margin-left: 400px;">
        <se-tooltip position="${position}" action="${action}">
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
    'Multiple Tooltips',
    () => {
      const position = select('position', positionOptions, 'bottom');
      const action = select('action', actionOptions, 'hover');

      return `
      <div style=" margin-top: 200px; margin-left: 200px;">
        <se-tooltip position="bottom" action="${action}">
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
          <se-tooltip-content>This is my tooltip1.</se-tooltip-content>
        </se-tooltip>
        <br><br>
        <se-tooltip position="left" action="${action}">
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
          <se-tooltip-content>This is my tooltip2.</se-tooltip-content>
        </se-tooltip>
        <br><br>
        <se-tooltip position="top" action="${action}">
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
          <se-tooltip-content>This is my tooltip3.</se-tooltip-content>
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
  );
