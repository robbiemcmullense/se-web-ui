import { newE2EPage } from '@stencil/core/testing';

describe('DialogHeaderComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-dialog-header></se-dialog-header>');
    element = await page.find('se-dialog-header');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with two slot element', async() => {
    const renderedHTML = '<div class="flex"><slot name="start"><slot></slot></div></slot>';
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });
});
