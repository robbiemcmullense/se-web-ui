import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

const fabOption = ['speeddial', 'backtotop'];
const positionOption = ['top', 'bottom'];
const colorOption = ['primary', 'alternative'];

storiesOf('Fab', module).add('Demo', () => {
  const option = select('option', fabOption, 'speeddial');
  const position = select('position', positionOption, 'top');
  const color = select('color', colorOption, 'primary');

  return `
      <se-fab icon="action_share" option="${option}" position="${position}" color="${color}">
          <se-fab-item icon="notification_critical_stroke">New Work Order</se-fab-item>
          <se-fab-item icon="notebook_paper">New Task</se-fab-item>
          <se-fab-item icon="task">New User</se-fab-item>
          <se-fab-item icon="user_add">New Work Item</se-fab-item>
          <se-fab-item icon="notebook_paper">New Task List</se-fab-item>
      </se-fab>
    `;
});
