import { newE2EPage } from '@stencil/core/testing';

describe('BlockContentComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-block-content></se-block-content>');
    element = await page.find('se-block-content');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with the fill-content class whenever the option is set to fill', async() => {
    await page.$eval('se-block-content', (elm: any) => {
      elm.option = 'fill';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('fill-content');
  });
});
