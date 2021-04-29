import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { text, select, boolean, number } from '@storybook/addon-knobs';

const displayOptions = ['information', 'success', 'warning', 'error'];

storiesOf('Snackbar', module)
  .add(
    'Simple',
    () => {
      const type = select('type', displayOptions, 'information');
      const canClose = boolean('can close', true);
      const open = boolean('open', true);
      const duration = number('duration', 5000);
      const icon = text('icon', 'information_circle');
      const message = text('message', 'My message that explains everything!');
      const button = text('actionText', '');

      return `
      <se-snackbar
        open="${open}"
        type="${type}"
        can-close="${canClose}"
        message="${message}"
        icon="${icon}"
        action-text="${button}"
        duration="${duration}"></se-snackbar>
      <div style="left:20px; bottom: 20px;position:absolute;">
        <se-dropdown id="icon-dropdown" alignment="left" >
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
  )
  .add(
    'Multiple',
    () => {
      const type = select('type', displayOptions, 'information');
      const canClose = boolean('can close', true);
      const open = boolean('open', true);
      const duration = number('duration', 5000);
      const icon = text('icon', 'information_circle');
      const message = text('message', 'My message that explains everything!');
      const button = text('actionText', '');

      return `
        <div style="position: fixed;display: flex;flex-direction: column;bottom: 0;">
          <se-snackbar
            style="position: relative;"
            open="${open}"
            type="${type}"
            can-close="${canClose}"
            message="${message}"
            icon="${icon}"
            action-text="${button}"
            duration="${duration}"></se-snackbar>
          <se-snackbar
            style="position: relative;"
            open="${open}"
            type="${type}"
            can-close="${canClose}"
            message="${message}"
            icon="${icon}"
            action-text="${button}"
            duration="${duration}"></se-snackbar>
        </div>
        <div style="left:20px; bottom: 20px;position:absolute;">
          <se-dropdown id="icon-dropdown" alignment="left" >
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
