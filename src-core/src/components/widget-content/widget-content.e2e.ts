import { newE2EPage } from '@stencil/core/testing';

describe('WidgetContentComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-widget-content></se-widget-content>');
    element = await page.find('se-widget-content');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with the full-content class whenever the option is set to fill', async() => {
    await page.$eval('se-widget-content', (elm: any) => {
      elm.option = 'fill';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('full-content');
  });
});
