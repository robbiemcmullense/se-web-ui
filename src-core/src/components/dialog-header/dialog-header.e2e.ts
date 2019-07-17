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

  it('renders with the primary class to indicate the default primary color property', async() => {
    expect(element.shadowRoot.querySelector('.se-dialog-header')).toHaveClass('primary');
  });

  it('renders with an h4 element with a flex class and a slot element with the "end" attribute', async() => {
    const headerElm = await page.find('se-dialog-header >>> h4');
    expect(headerElm).toBeTruthy();
    expect(headerElm).toHaveClass('flex');

    const slotElm = await page.find ('se-dialog-header >>> slot[name="end"]');
    expect(slotElm).toBeTruthy();
  });
});
