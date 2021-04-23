import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { text, select, boolean, number } from '@storybook/addon-knobs';

const displayOptions = ['information', 'success', 'warning', 'error'];

storiesOf('Snackbar', module).add(
  'Demo',
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
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
