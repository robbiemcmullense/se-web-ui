import { storiesOf } from '@storybook/html';
import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as readme from './readme.md';

storiesOf('Filtration Smart', module).add(
  'Mobile Trigger',
  () => {
    document.addEventListener('toggleMobileView', () => {
      action('toggleMobileView')();
    });

    const label = text('label', 'Some label');
    const filterCount = number('count', 6);

    return `
      <div style="padding: 40px">
        <se-filtration-smart-mobile-view-trigger
          label="${label}"
          count="${filterCount}"
        />
      </div>`;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
