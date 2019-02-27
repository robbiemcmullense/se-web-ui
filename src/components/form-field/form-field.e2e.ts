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

  it('renders with a label with its value equal to the given label property', async() => {
    const renderedHTML = '<div class="se-form-field">'
      + '<se-label class="hydrated"></se-label>'
      + '<slot></slot></div>'
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });
});
