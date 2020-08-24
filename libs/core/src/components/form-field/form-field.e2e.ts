import { newE2EPage } from '@stencil/core/testing';

describe('FormFieldComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-form-field></se-form-field>');
    element = await page.find('se-form-field');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});

describe('FormFieldComponent with Checkbox type', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-form-field type="checkbox" label="checkbox label"><se-checkbox value="my checkbox value"></se-checkbox></se-form-field>');
  });

  it('emits an event with the value "true" when the checkbox is clicked', async() => {
    element = await page.find('se-form-field se-checkbox >>> button');
    const eventSpy = await page.spyOnEvent('didSubmit');
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail('true');
  });
});

describe('FormFieldComponent with Input type', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-form-field label="input label"><input type="text" /></se-form-field>');
  });

  it('renders a label with an inner text equal to the se-form-field label property', async() => {
    element = await page.find('se-form-field label');
    expect(element).toEqualText('input label');
  });
});

describe('Form Field Screenshots', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('should render the checkbox, radio, input, select, and textarea form fields all in inline mode', async() => {
    await page.setContent(`
      <se-form-field label="checkbox label" type="checkbox" required="true">
        <se-checkbox></se-checkbox>
      </se-form-field>
      <se-form-field label="radio label" type="radio" required="true">
        <se-radio></se-radio>
      </se-form-field>
      <se-form-field label="Input" required="true">
        <input type="text" />
      </se-form-field>
      <se-form-field label="Select" required="true" type="select">
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </se-form-field>
      <se-form-field type="input" label="Multi-Line Input">
        <textarea rows="5"></textarea>
      </se-form-field>
    `);
    await page.compareScreenshot('Inline Form Fields', {fullPage: false});
  });

  it('should render the input, select, and textarea form fields all in stacked mode', async() => {
    await page.setContent(`
      <se-form-field option="stacked" label="Input" required="true">
        <input type="text" />
      </se-form-field>
      <se-form-field option="stacked" label="Select" required="true" type="select">
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </se-form-field>
      <se-form-field option="stacked" type="input" label="Multi-Line Input">
        <textarea rows="5"></textarea>
      </se-form-field>
    `);
    await page.compareScreenshot('Stacked Form Fields', {fullPage: false});
  });
});
