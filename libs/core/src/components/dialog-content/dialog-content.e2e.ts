import { newE2EPage } from '@stencil/core/testing';

describe('dialogContentComponent', () => {
  let page;
  let element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-dialog-content></se-dialog-content>');
    element = await page.find('se-dialog-content');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with the mode class whenever the mode is set to fill', async () => {
    element.setProperty('option', 'fill');
    await page.waitForChanges();
    expect(element.shadowRoot.querySelector('.se-dialog-content')).toHaveClass(
      'full-content'
    );
  });
});
