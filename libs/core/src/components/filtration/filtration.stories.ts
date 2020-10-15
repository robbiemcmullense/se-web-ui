// tslint:disable-next-line: linebreak-style
import { storiesOf } from '@storybook/html';
import { select, text, boolean, number } from '@storybook/addon-knobs';

const layoutOption = ['inline', 'stacked'];
const inputTypeOption = ['text', 'date'];

storiesOf('Filtration', module).add('Filtration Multiple', () => {
  // const option = select('option', layoutOption, 'inline');
  // const padding = select('padding', ['none', 'small', 'medium'], 'small');
  // const disabled = boolean('disabled', false);
  // const block = boolean('block', false);
  // const labelWidth = text('label-width', '35%');
  // const labelAlign = select('label-align', ['left', 'right'], 'right');

  return `
    <se-block>
    </se-block>
  `;
});
