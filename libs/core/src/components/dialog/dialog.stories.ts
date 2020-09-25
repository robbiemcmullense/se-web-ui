import { storiesOf } from '@storybook/html';
import { select, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

const sizeOptions = ['medium', 'small', 'large', 'fill'];
const colorOptions = ['primary', 'alternative'];

storiesOf('Dialog', module).add(
  'Demo',
  () => {
    const size = select('size', sizeOptions, 'medium');
    const color = select('color', colorOptions, 'primary');
    const open = boolean('open', true);
    const canBackdrop = boolean('can backdrop', true);

    return `
      <se-dialog open=${open} can-backdrop="${canBackdrop}" size="${size}" color="${color}">
        <se-dialog-header>My awesome title</se-dialog-header>
        <se-dialog-content
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </se-dialog-content>
        <se-dialog-footer>
          <se-button>Cancel</se-button>
          <se-button>OK</se-button>
        </se-dialog-footer>
      </se-dialog>
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
