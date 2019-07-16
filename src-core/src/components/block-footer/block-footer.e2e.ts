import { newE2EPage } from '@stencil/core/testing';

describe('BlockFooterComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-block-footer></se-block-footer>');
    element = await page.find('se-block-footer');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('should have the "row" class to reflect its default direction', () => {
    expect(element).toHaveClasses(['hydrated', 'row']);
  });

  it('should render with the card class when option is set to card', async() => {
    await page.$eval('se-block-footer', (elm: any) => {
      elm.option = 'card';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('card');
  });

  it('renders with an h3 element with a flex class and a slot element with the "start" attribute', async() => {
    const divElm = await page.find('se-block-footer >>> div');
    expect(divElm).toBeTruthy();
    expect(divElm).toHaveClass('flex');

    const slotElm = await page.find ('se-block-footer >>> slot[name="start"]');
    expect(slotElm).toBeTruthy();
  });
});