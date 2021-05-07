import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as readme from './readme.md';

storiesOf('Filtration Smart', module).add(
  'Reset Button',
  () => {
    document.addEventListener('resetAllClicked', () => {
      action('resetAllClicked')();
    });

    const label = text('label', 'Reset all');
    const disabled = boolean('disabled', false);

    return `
      <div style="padding: 40px">
        <se-filtration-smart-reset-button
          label="${label}"
          disabled="${disabled}"
        />
      </div>`;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
