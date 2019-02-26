import { newE2EPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-checkbox></se-checkbox>');

    const element = await page.find('se-checkbox');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a primary color by default', async () => {
    const page = await newE2EPage();
    const renderedHTML = '<label class="checkbox-container">'
    + '<slot></slot>'
    + '<input type="checkbox" />'
    + '<span class="checkmark" data-color="primary"></span></label>';
    await page.setContent('<se-checkbox></se-checkbox>');

    const element = await page.find('se-checkbox');
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });

  it('renders with a disabled input element when the parent element has disabled=true', async () => {
    const page = await newE2EPage();
    await page.setContent('<se-checkbox disabled="true"></se-checkbox>');

    const element = await page.find('se-checkbox');
    const input = element.shadowRoot.querySelector('input');
    expect(input.disabled).toBeTruthy();
  });
});
