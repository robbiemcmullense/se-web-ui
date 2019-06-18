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
    element = await page.find('se-form-field se-checkbox >>> span');
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
    await page.setContent('<se-form-field label="input label"><input type="text" />></se-form-field>');
  });

  it('renders a label with an inner text equal to the se-form-field label property', async() => {
    element = await page.find('se-form-field >>> label');
    expect(element).toEqualText('input label');
  });
});
