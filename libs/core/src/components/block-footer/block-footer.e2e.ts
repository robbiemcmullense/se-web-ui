import { newE2EPage } from '@stencil/core/testing';

describe('BlockFooterComponent', () => {
  let page, hostElement, footerElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-block-footer></se-block-footer>');
    hostElement = await page.find('se-block-footer');
    footerElement = await page.find('se-block-footer >>> .se-block-footer');
  });

  it('renders', async () => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('should have the "row" class to reflect its default direction', () => {
    expect(footerElement).toHaveClass('row');
  });

  it('should render with the card class when option is set to card', async () => {
    hostElement.setProperty('option', 'card');
    await page.waitForChanges();
    expect(footerElement).toHaveClass('card');
  });

  it('renders with an h3 element with a flex class and a slot element with the "start" attribute', async () => {
    const divElm = await page.find('se-block-footer >>> div > div');
    expect(divElm).toBeTruthy();
    expect(divElm).toHaveClass('flex');

    const slotElm = await page.find('se-block-footer >>> slot[name="start"]');
    expect(slotElm).toBeTruthy();
  });
});
