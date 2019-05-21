import { newE2EPage } from '@stencil/core/testing';

describe('TooltipContentComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-tooltip-content></se-tooltip-content>');
    element = await page.find('se-tooltip-content');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });
});