import { newE2EPage } from '@stencil/core/testing';

describe('DialogFooterComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-dialog-footer></se-dialog-footer>');
    element = await page.find('se-dialog-footer');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with an h3 element with a flex class and a slot element with the "start" attribute', async () => {
    const divElm = await page.find('se-dialog-footer >>> div');
    expect(divElm).toBeTruthy();
    expect(divElm).toHaveClass('flex');

    const slotElm = await page.find('se-dialog-footer >>> slot[name="start"]');
    expect(slotElm).toBeTruthy();
  });
});
