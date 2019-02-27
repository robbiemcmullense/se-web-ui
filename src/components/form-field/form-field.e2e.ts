import { newE2EPage } from '@stencil/core/testing';

describe('FormFieldComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-form-field></se-form-field>');

    const element = await page.find('se-form-field');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a label with its value equal to the given label property', async () => {
    const page = await newE2EPage();
    const renderedHTML = '<div class="se-form-field">'
      + '<se-label class="hydrated"></se-label>'
      + '<slot></slot></div>'
    await page.setContent('<se-form-field></se-form-field>');

    const element = await page.find('se-form-field');
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });
});
