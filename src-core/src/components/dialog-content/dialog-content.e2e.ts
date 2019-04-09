import { newE2EPage } from '@stencil/core/testing';

describe('dialogContentComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-dialog-content></se-dialog-content>');
    element = await page.find('se-dialog-content');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with the mode class whenever the mode is set to fill', async() => {
    await page.$eval('se-dialog-content', (elm: any) => {
      elm.option = 'fill';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('full-content');
  });
});
