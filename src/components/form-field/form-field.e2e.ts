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

  it('renders with an se-label element', async() => {
    const renderedHTML = '<div class="se-form-field">'
      + '<se-label class="hydrated"></se-label>'
      + '<slot></slot></div>'
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });
});

describe('FormFieldComponent with Checkbox type', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-form-field type="checkbox" label="checkbox label"><se-checkbox value="my checkbox value"></se-checkbox></se-form-field>');  
  });

  it('renders with a label with its value equal to the given label property', async() => {
    element = await page.find('se-form-field >>> se-label');
    const checkboxElm = await page.find('se-form-field se-checkbox');
    expect(element.shadowRoot).toEqualHtml('<label class="se-label">checkbox label</label>');
    expect(checkboxElm.shadowRoot).toEqualHtml('<label class="checkbox-container"><slot></slot><input type="checkbox"/><span class="checkmark" data-color="primary"></span></label>');
  });

  it('emits an event with the value "true" when the checkbox is clicked', async() => {
    element = await page.find('se-form-field se-checkbox');
    const eventSpy = await page.spyOnEvent('submit');
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail(true);
  });
});

describe('FormFieldComponent with Input type', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-form-field type="input" label="input label"><input type="text"/></se-form-field>');  
  });

  it('renders with an input field that has a placeholder equal to "Text" by default', async() => {
    element = await page.find('se-form-field input');
    expect(element).toEqualHtml('<input type="text" placeholder="Text" />')
  });
});