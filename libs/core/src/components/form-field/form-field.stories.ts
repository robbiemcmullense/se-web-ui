import { storiesOf } from '@storybook/html';
import { select, text, boolean, number } from '@storybook/addon-knobs';

const layoutOption = ['inline', 'stacked'];
const inputTypeOption = ['text', 'date'];

storiesOf('Form Field', module)
  .add('Form Field Checkbox', () => {
    const label = text('label', 'My Checkbox Label');
    const required = boolean('required', false);
    const disabled = boolean('disabled', false);

    return `
      <se-form-field
        type='checkbox'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        >
        <se-checkbox></se-checkbox>
      </se-form-field>
    `;
  })
  .add('Form Field Radio', () => {
    const label = text('label', 'My Radio Label');
    const required = boolean('required', false);
    const disabled = boolean('disabled', false);

    return `
      <se-form-field
        type='radio'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        >
        <se-radio></se-radio>
      </se-form-field>
    `;
  })
  .add('Form Field Input', () => {
    const option = select('option', layoutOption, 'inline');
    const inputType = select('inputType', inputTypeOption, 'text');
    const label = text('label', 'Input');
    const required = boolean('required', false);
    const disabled = boolean('disabled', false);

    return `
      <se-form-field
        type='input'
        option='${option}'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        >
        <input type='${inputType}' />
      </se-form-field>
    `;
  })
  .add('Form Field Select', () => {
    const option = select('option', layoutOption, 'inline');
    const label = text('label', 'Select');
    const required = boolean('required', false);
    const disabled = boolean('disabled', false);

    return `
      <se-form-field
        type='select'
        option='${option}'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        >
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </se-form-field>
    `;
  })
  .add('Form Field Textarea', () => {
    const option = select('option', layoutOption, 'inline');
    const rows = number('rows', 3);
    const label = text('label', 'Textarea');
    const required = boolean('required', false);
    const disabled = boolean('disabled', false);

    return `
      <se-form-field
        type='input'
        option='${option}'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        >
        <textarea rows='${rows}'></textarea>
      </se-form-field>
    `;
  })
  .add('Form Field Multiple', () => {
    const option = select('option', layoutOption, 'inline');
    const disabled = boolean('disabled', false);

    return `
      <se-block>
      <se-form-field
        type='checkbox'
        option='${option}'
        label='chekbox'
        required='true'
        disabled='${disabled}'
        >
        <se-checkbox></se-checkbox>
      </se-form-field>
      <se-form-field
        type='another checkbox'
        option='${option}'
        label='chekbox'
        required='true'
        disabled='${disabled}'
        >
        <se-checkbox option="switch"></se-checkbox>
      </se-form-field>
      <se-form-field
        type='radio'
        option='${option}'
        label='radio!!!'
        required='true'
        disabled='${disabled}'
        >
        <se-radio-group>
          <se-radio value="first" label="Radio Label 1"></se-radio>
          <se-radio value="second" label="Radio Label 2"></se-radio>
          <se-radio value="third" label="Radio Label 3"></se-radio>
        </se-radio-group>
      </se-form-field>
      <se-form-field
        option='${option}'
        label='Some unstyled text'
        disabled='${disabled}'
        >
        <div>Some text alined</div>
      </se-form-field>
      <se-form-field
        option='${option}'
        label='Some bold text'
        >
        <div><b>Some bold text alined with the rest</b></div>
      </se-form-field>
      <se-form-field
        type='input'
        option='${option}'
        label='Input'
        required='true'
        disabled='${disabled}'
        >
        <input type="text" />
      </se-form-field>
      <se-form-field
        type='select'
        option='${option}'
        label='Select'
        required='true'
        disabled='${disabled}'
        >
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </se-form-field>
      <se-form-field
        type='input'
        option='${option}'
        label='Textarea'
        required='true'
        disabled='${disabled}'
        >
        <textarea rows='3'></textarea>
      </se-form-field>
      <se-form-field
        type='input'
        option='${option}'
        label='Date'
        required='true'
        disabled='${disabled}'
        >
        <input type="date" />
      </se-form-field>
      </se-block>
    `;
  });
