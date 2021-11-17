import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { select, text, boolean, number } from '@storybook/addon-knobs';

const inputTypeOption = ['text', 'date'];

storiesOf('Form Field', module)
  .add(
    'Form Field Multiple',
    () => {
      const stacked = boolean('stacked', false);
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        text-only
        stacked='${stacked}'
        label='Some unstyled text'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <div>Some text alined and really long Some text alined and really long Some text alined and really long Some text alined and really long Some text alined and really long Some text alined and really long</div>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        text-only
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        type='select'
        stacked='${stacked}'
        label='Select'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <select>
          <option>very long option very long option very long option very long option</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </se-form-field>
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
        stacked='${stacked}'
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
      <se-form-field
        label-align='${labelAlign}'
        padding='${padding}'
        block='${block}'
        type='input'
        stacked='${stacked}'
        label='input with tooltips'
        required='true'
        disabled='${disabled}'
        label-width='${labelWidth}'
        >
        <div style="display:flex; align-items: center;">
          <input />
          <se-tooltip>
            <se-icon slot="tooltip" color="secondary">information_stroke</se-icon>
            <se-tooltip-content>This is my tooltip.</se-tooltip-content>
          </se-tooltip>
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
    'Form Field in grid',
    () => {
      const padding = select('padding', ['none', 'small', 'medium'], 'none');
      const stacked = boolean('stacked', false);

      const block = boolean('block', false);

      return `
        <se-block>
          <se-container>
          <se-container display="grid" column-size='350px' row-size='auto' padding=${padding}>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="PO Number:" text-only padding=${padding}>
              00123456
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="Release Date:" text-only padding=${padding}>
              02/16/2019
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="No text:" padding=${padding}></se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="No text text only:" text-only padding=${padding}></se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="PO Number:" padding=${padding}>
              <input/>
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="PO date:" padding=${padding}>
              <input type="date"/>
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="Release Date:" padding=${padding}>
              <select>
                <option>Option 1 Option 1 Option 1 Option 1 Option Option</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="Customer ID:" padding=${padding}>
              <div class="with-icon">
                <input />
                <se-icon size="medium" option="button" onclick="alert('clicked')">folder</se-icon>
              </div>
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="tooltips? :" padding=${padding}>
              <div style="display:flex; align-items: center;">
                <select>
                  <option>Option 1</option>
                  <option>Option 1 Option 1 Option 1 Option 1 Option Option</option>
                  <option>Option 3</option>
                </select>
                <se-tooltip>
                  <se-icon slot="tooltip" color="secondary">information_stroke</se-icon>
                  <se-tooltip-content>This is my tooltip.</se-tooltip-content>
                </se-tooltip>
              </div>
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="tooltips? :" padding=${padding}>
              <div style="display:flex; align-items: center;">
                <select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <se-tooltip>
                  <se-icon slot="tooltip" color="secondary">information_stroke</se-icon>
                  <se-tooltip-content>This is my tooltip.</se-tooltip-content>
                </se-tooltip>
              </div>
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="Delivery Address:" text-only padding=${padding}>
              <div>Graybar Elect Co 5818836</div>
              <div>9222 Orly Road, Address 2</div>
              <div>Indianapolis, IN 46241-9607</div>
            </se-form-field>
            <se-form-field stacked="${stacked}" block=${block} label-align="left" label="Delivery Service:" padding="none">
              <div style="display:flex; align-items: center;">
                <input />
                <se-tooltip>
                  <se-icon slot="tooltip" color="secondary">information_stroke</se-icon>
                  <se-tooltip-content>This is my tooltip.</se-tooltip-content>
                </se-tooltip>
              </div>
            </se-form-field>
            <se-form-field
              padding="none"
              stacked="${stacked}"
              block=${block}
              label-align="left"
              label="Quote Name"
              required="true"
            >
              <div style="align-items: center; display: flex;">
                <input
                  type="text"
                  value="Quote Name"
                />
                <se-tooltip position="left">
                  <se-icon color="secondary" slot="tooltip">
                    information_stroke
                  </se-icon>
                  Please Enter the Project's Name
                </se-tooltip>
              </div>
            </se-form-field>
          </se-container>
          </se-container>
        </se-block>`;
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
      const stacked = boolean('stacked', false);
      const inputType = select('inputType', inputTypeOption, 'text');
      const label = text('label', 'My label');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='input'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        stacked='${stacked}'
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
      const stacked = boolean('stacked', false);
      const label = text('label', 'Select');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='select'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        stacked='${stacked}'
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
      const stacked = boolean('stacked', false);
      const rows = number('rows', 3);
      const label = text('label', 'Input');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='input'
        label='${label}'
        required='${required}'
        disabled='${disabled}'
        stacked='${stacked}'
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
      const stacked = boolean('stacked', false);
      const label = text('label', 'Input');
      const required = boolean('required', false);
      const disabled = boolean('disabled', false);
      const block = boolean('block', false);

      return `
      <se-form-field
        type='input'
        label='${label}'
        required=${required}
        disabled='${disabled}'
        stacked='${stacked}'
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
  )
  .add(
    'date picker side by side',
    () => {
      return `
      <se-container>
          <se-form-field style="flex:1; min-width: 0;"  block label="Start date">
            <input type="date"/>
          </se-form-field>
          <se-form-field style="flex:1; min-width: 0;"  block label="End date">
            <input type="date"/>
          </se-form-field>
        </se-container>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
