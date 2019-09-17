import { newE2EPage } from '@stencil/core/testing';

describe('DialogComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-dialog></se-dialog>');
    element = await page.find('se-dialog');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('should have the medium class to indicate its (default) medium size', async() => {
    expect(element.shadowRoot.querySelector('div')).toHaveClass('medium');
  });

  it('emits the backdrop event when clicking on the background', async() => {
    const eventSpy = await page.spyOnEvent('backdrop');
    await element.callMethod('backdropClicked');
    expect(eventSpy).toHaveReceivedEvent();
  });
});

describe('Dialog Screenshots', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders with the default primary color and default medium size', async() => {
    await page.setContent(`
      <se-dialog open="true">
        <se-dialog-header>Primary Header</se-dialog-header>
        <se-dialog-content>Medium Content</se-dialog-content>
        <se-dialog-footer><se-button>Close</se-button></se-dialog-footer>
      </se-dialog>
    `);
    await page.compareScreenshot('Primary Medium Dialog', {fullPage: false});
  });

  it('renders with an alternative color and small size', async() => {
    await page.setContent(`
      <se-dialog open="true" color="alternative" size="small">
        <se-dialog-header>Alt Header</se-dialog-header>
        <se-dialog-content>Small Content</se-dialog-content>
        <se-dialog-footer><se-button>Close</se-button></se-dialog-footer>
      </se-dialog>
    `);
    await page.compareScreenshot('Alternative Small Dialog', {fullPage: false});
  });
});