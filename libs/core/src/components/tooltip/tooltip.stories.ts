import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const positionOptions = ['bottom', 'top', 'left', 'right'];
const actionOptions = ['hover', 'click'];

storiesOf('Tooltip', module)
  .add('Demo', () => {
    const position = select('position', positionOptions, 'bottom')
    const action = select('action', actionOptions, 'hover')

    return `
      <div style="width: 100%; height: 500px; margin-top: 10%; margin-left: 50%;">
        <se-tooltip position="${position}" action="${action}">
          <se-button option="raised" color="primary" slot="tooltip">Tooltip</se-button>
          <se-tooltip-header>Tooltip Complex</se-tooltip-header>
          <se-tooltip-content>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet 
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </se-tooltip-content>
          <se-tooltip-footer>
            <se-button option="raised" color="secondary">Retry</se-button>
          </se-tooltip-footer>
        </se-tooltip>
      </div>
    `
  })