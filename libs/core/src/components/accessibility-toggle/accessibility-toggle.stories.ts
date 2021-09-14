import { storiesOf } from '@storybook/html';
import { boolean, text } from '@storybook/addon-knobs';
import readme from './readme.md';

storiesOf('Accessibility Toggle', module)
  .add(
    'Toggle',
    () => {
      const selected = boolean('Selected', false);
      const labelModeOn = text('Label Mode On', 'Accessibility mode on');
      const labelModeOff = text('Label Mode Off', 'Accessibility mode off');

      return `
        <se-accessibility-toggle selected=${selected} label-mode-on="${labelModeOn}" label-mode-off="${labelModeOff}"></se-accessibility-toggle>
      `;
    },
    {
      notes: {
        markdown: readme,
      },
      parameters: {
        viewport: {
          disabled: true,
        },
      },
    }
  );
