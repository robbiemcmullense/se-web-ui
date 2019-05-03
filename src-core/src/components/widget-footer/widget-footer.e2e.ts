import { newE2EPage } from '@stencil/core/testing';

describe('WidgetFooterComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-widget-footer></se-widget-footer>');
    element = await page.find('se-widget-footer');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render with the card class when option is set to card', async() => {
    await page.$eval('se-widget-footer', (elm: any) => {
      elm.option = 'card';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('card');
  });

  it('renders with an h3 element with a flex class and a slot element with the "start" attribute', async() => {
    const divElm = await page.find('se-widget-footer >>> div');
    expect(divElm).toBeTruthy();
    expect(divElm).toHaveClass('flex');

    const slotElm = await page.find ('se-widget-footer >>> slot[name="start"]');
    expect(slotElm).toBeTruthy();
  });
});
