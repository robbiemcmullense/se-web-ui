import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const positionOptions = ['bottom', 'top', 'left', 'right'];
const actionOptions = ['hover', 'click'];

storiesOf('Tooltip', module)
  .add('Demo', () => {
    const position = select('position', positionOptions, 'bottom')
    const action = select('action', actionOptions, 'hover')

    return `
      <div style="width: 100%; height: 100%; margin-top: 20%; margin-left: 50%;">
        <se-tooltip position="${position}" action="${action}">
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
          <se-tooltip-content>This is my tooltip.</se-tooltip-content>
        </se-tooltip>
      </div>
    `
  })