import { newE2EPage } from '@stencil/core/testing';

describe('BlockHeaderComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-block-header></se-block-header>');
    element = await page.find('se-block-header');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should render with the card class when option is set to card', async () => {
    element.setProperty('option', 'card');
    await page.waitForChanges();
    expect(element.shadowRoot.querySelector('.se-block-header')).toHaveClass(
      'option-card'
    );
  });

  it('renders a div element with flex and centered classes, and slot elements with the "start" and "end" attributes', async () => {
    const divElm = await page.find('se-block-header >>> .se-block-header div');
    const startElm = await page.find('se-block-header >>> slot[name="start"]');
    const endElm = await page.find('se-block-header >>> slot[name="end"]');
    expect(startElm).toBeTruthy();
    expect(endElm).toBeTruthy();
    expect(divElm).toBeTruthy();
  });
});
