import { newE2EPage } from '@stencil/core/testing';

describe('DialogFooterComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-dialog-footer></se-dialog-footer>');
    element = await page.find('se-dialog-footer');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with two slot elements', async() => {
    const renderedHTML = '<div class="flex"><slot name="start"></slot></div><slot></slot>';
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });
});
