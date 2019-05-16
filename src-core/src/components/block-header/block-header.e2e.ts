import { newE2EPage } from '@stencil/core/testing';

describe('BlockHeaderComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-block-header></se-block-header>');
    element = await page.find('se-block-header');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render with the card class when option is set to card', async() => {
    await page.$eval('se-block-header', (elm: any) => {
      elm.option = 'card';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('card');
  });

  it('renders with an h3 element with a flex class and a slot element with the "end" attribute', async() => {
    const headerElm = await page.find('se-block-header >>> h3');
    expect(headerElm).toBeTruthy();
    expect(headerElm).toHaveClass('flex');

    const slotElm = await page.find ('se-block-header >>> slot[name="end"]');
    expect(slotElm).toBeTruthy();
  });
});
