import { newE2EPage } from '@stencil/core/testing';

 describe('ToooltipComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-tooltip></se-tooltip>');
    element = await page.find('se-tooltip');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('has the "bottom" class because it is bottom-aligned by default', async() => {
    expect(element).toHaveClasses(['hydrated', 'bottom']);
  });

  it('adds a "show" class to a div element with class tooltip when open is set to true', async() => {
    await element.callMethod('open');
    await page.waitForChanges();
    const tooltip = await page.find('se-tooltip >>> div.tooltip');
    expect(tooltip).toHaveClasses(['tooltip', 'show']);
  });

  it('removes the "show" class to the div element with class tooltip when open is set to false', async() => {
    await element.callMethod('close');
    const tooltip = await page.find('se-tooltip >>> div.tooltip');
    expect(tooltip).not.toHaveClass('show');
  });
});