import { newE2EPage } from '@stencil/core/testing';

describe('TooltipHeaderComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-tooltip-header></se-tooltip-header>');
    element = await page.find('se-tooltip-header');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with an div element with a flex class and a slot element with the "end" attribute', async () => {
    const headerElm = await page.find('se-tooltip-header >>> div');
    expect(headerElm).toBeTruthy();
    const slotElm = await page.find('se-tooltip-header >>> slot[name="end"]');
    expect(slotElm).toBeTruthy();
  });
});
