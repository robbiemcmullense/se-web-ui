import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import readmeItem from '../fab-item/readme.md';
import { boolean, select } from '@storybook/addon-knobs';

const fabOption = ['speeddial', 'backtotop'];
const positionOption = ['top', 'bottom'];
const colorOption = ['primary', 'alternative'];

storiesOf('Fab', module).add(
  'Demo',
  () => {
    const option = select('option', fabOption, 'speeddial');
    const position = select('position', positionOption, 'top');
    const color = select('color', colorOption, 'primary');
    const overlay = boolean('overlay', false);

    return `
      <se-tooltip position="left">
        <se-fab slot="tooltip" icon="action_share" option="${option}" overlay="${overlay}" position="${position}" color="${color}">
          <se-fab-item icon="notification_critical_stroke">New Work Order</se-fab-item>
          <se-fab-item icon="notebook_paper">New Task</se-fab-item>
          <se-fab-item icon="task">New User</se-fab-item>
          <se-fab-item icon="user_add">New Work Item</se-fab-item>
          <se-fab-item icon="notebook_paper">New Task List</se-fab-item>
        </se-fab>
        <se-tooltip-content>test</se-tooltip-content>
       </se-tooltip>

    `;
  },
  {
    notes: {
      markdown: { 'se-fab': readme, 'se-fab-item': readmeItem },
    },
  }
);
