import { newE2EPage } from '@stencil/core/testing';

describe('DialogComponent', () => {
  let page;
  let element;
  let background;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-dialog open></se-dialog>');
    element = await page.find('se-dialog');
    background = await page.find('se-dialog >>> .dialog-background');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should have the medium class to indicate its (default) medium size', async () => {
    expect(element.shadowRoot.querySelector('div')).toHaveClass('medium');
  });

  xit('emits the backdrop event when clicking on the background', async () => {
    const backdropEventSpy = await page.spyOnEvent('backdrop');
    const didCloseEventSpy = await page.spyOnEvent('didClose');
    jest.runAllTimers();
    await background.click();
    expect(didCloseEventSpy).toHaveReceivedEvent();
    expect(backdropEventSpy).toHaveReceivedEvent();
  });
});

describe('Dialog Screenshots', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders with the default primary color and default medium size', async () => {
    await page.setContent(`
      <se-dialog open="true">
        <se-dialog-header>Primary Header</se-dialog-header>
        <se-dialog-content>Medium Content</se-dialog-content>
        <se-dialog-footer><se-button>Close</se-button></se-dialog-footer>
      </se-dialog>
    `);
    await page.compareScreenshot('Primary Medium Dialog', { fullPage: false });
  });

  it('renders with an alternative color and small size', async () => {
    await page.setContent(`
      <se-dialog open="true" color="alternative" size="small">
        <se-dialog-header>Alt Header</se-dialog-header>
        <se-dialog-content>Small Content</se-dialog-content>
        <se-dialog-footer><se-button>Close</se-button></se-dialog-footer>
      </se-dialog>
    `);
    await page.compareScreenshot('Alternative Small Dialog', {
      fullPage: false,
    });
  });
});
