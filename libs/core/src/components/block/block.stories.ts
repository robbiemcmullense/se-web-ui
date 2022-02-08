import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';
import readme from './readme.md';

const blockOption = ['basic', 'widget', 'card', 'card-old', 'fill'];

storiesOf('Block', module).add(
  'Block',
  () => {
    const option = select('option', blockOption, 'basic');

    return `
      <se-container direction="row">
        <se-container option="basic">
          <se-block option=${option}>
            <se-block-header>
              Block Header Title
              <div slot="end">
                <se-icon option="button" color="alternative">
                  other_vertical
                </se-icon>
              </div>
            </se-block-header>
            <se-block-content>Block Content</se-block-content>
            <se-block-footer>
              <p slot="start">Block Footer<p>
            </se-block-footer>
          </se-block>
        </se-container>
      </se-container>
    `;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
