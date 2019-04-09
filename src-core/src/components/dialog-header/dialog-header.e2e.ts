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

  it('renders with two slot elements', async() => {
    const renderedHTML = '<h3 class="flex"><slot></slot></h3><slot name="end"></slot>';
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });
});
