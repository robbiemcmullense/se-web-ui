import { newE2EPage } from '@stencil/core/testing';

describe('TooltipFooterComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-tooltip-footer></se-tooltip-footer>');
    element = await page.find('se-tooltip-footer');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  
  it('renders with an div element with a flex class and a slot element with the "start" attribute', async() => {
    const divElm = await page.find('se-tooltip-footer >>> div');
    expect(divElm).toBeTruthy();
    expect(divElm).toHaveClass('flex');

    const slotElm = await page.find ('se-tooltip-footer >>> slot[name="start"]');
    expect(slotElm).toBeTruthy();
  });
});