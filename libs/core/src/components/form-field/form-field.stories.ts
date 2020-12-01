import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, text, boolean, number } from '@storybook/addon-knobs';

const layoutOption = ['inline', 'stacked'];
const inputTypeOption = ['text', 'date'];

storiesOf('Form Field', module)
  .add(
    'Form Field Multiple',
    () => {
      const option = select('option', layoutOption, 'inline');
      const padding = select('padding', ['none', 'small', 'medium'], 'small');
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);
      const labelWidth = text('label-width', '35%');
      const labelAlign = select('label-align', ['left', 'right'], 'right');

      return `
    <se-block>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='checkbox'
        option='${option}'
        label='chekbox'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <se-checkbox></se-checkbox>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='another checkbox'
        option='${option}'
        label='chekbox'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <se-checkbox option="switch"></se-checkbox>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        option='${option}'
        label='Save automatically'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <se-checkbox option="onoff"></se-checkbox>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='radio'
        option='${option}'
        label='radio!!!'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <se-radio-group>
          <se-radio value="first" label="Radio Label 1"></se-radio>
          <se-radio value="second" label="Radio Label 2"></se-radio>
          <se-radio value="third" label="Radio Label 3"></se-radio>
        </se-radio-group>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        option='${option}'
        label='Some unstyled text'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <div>Some text alined</div>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        option='${option}'
        label-width='${labelWidth}'
        label='Some bold text'
        >
        <div><b>Some bold text alined with the rest</b></div>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        option='${option}'
        label='Input'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <input type="text" />
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        option='${option}'
        label='Input with button and icon'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <div style="display:flex; align-items: center;">
          <input type="text" />
          <se-button icon-only color="alternative" disabled=${disabled}>
            <se-icon slot="icon" size="medium">folder</se-icon>
          </se-button>
        </div>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='select'
        option='${option}'
        label='Select'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        option='${option}'
        label='Textarea'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <textarea rows='3'></textarea>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        option='${option}'
        label='Date'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <input type="date" />
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        option='${option}'
        label='Search with-icon small'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <div class="with-icon">
          <input type="search"/>
          <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>
        </div>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        option='${option}'
        label='Search no search-wrapper'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <input type="search" />
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        option='${option}'
        label='input with-icon medium'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <div class="with-icon">
          <input />
          <se-icon size="medium" option="button" onclick="alert('clicked')">folder</se-icon>
        </div>
      </se-form-field>
    </se-block>
  `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Form Field Checkbox',
    () => {
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
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Form Field Radio',
    () => {
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
        <se-radio-group>
          <se-radio value="first" label="Radio Label 1"></se-radio>
          <se-radio value="second" label="Radio Label 2"></se-radio>
          <se-radio value="third" label="Radio Label 3"></se-radio>
        </se-radio-group>
      </se-form-field>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Form Field Input',
    () => {
      const option = select('option', layoutOption, 'inline');
      const inputType = select('inputType', inputTypeOption, 'text');
      const label = text('label', 'My label');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='input'
        option='${option}'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        block='${block}'
        >
        <input type='${inputType}' />
      </se-form-field>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Form Field Select',
    () => {
      const option = select('option', layoutOption, 'inline');
      const label = text('label', 'Select');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='select'
        option='${option}'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        block='${block}'
        >
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </se-form-field>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Form Field Textarea',
    () => {
      const option = select('option', layoutOption, 'inline');
      const rows = number('rows', 3);
      const label = text('label', 'Input');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='input'
        option='${option}'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        block='${block}'
        >
        <textarea rows='${rows}'></textarea>
      </se-form-field>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Form Field with icon',
    () => {
      const option = select('option', layoutOption, 'inline');
      const label = text('label', 'Input');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='input'
        option='${option}'
        label='${label}'
        required=${required}
        disabled='${disabled}'
        block=${block}
        >
        <div style="display:flex; align-items: center;">
          <input type="text" />
          <se-button icon-only color="alternative" disabled=${disabled}>
            <se-icon slot="icon" size="medium">folder</se-icon>
          </se-button>
        </div>
      </se-form-field>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
