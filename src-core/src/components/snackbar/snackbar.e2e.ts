import { newE2EPage } from '@stencil/core/testing';

describe('SnackbarComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-snackbar></se-snackbar>');
    element = await page.find('se-snackbar');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('renders with an information class by default', async() => {
    expect(element).toHaveClasses(['hydrated', 'information']);
  });

  it('should have an icon and a close element by default', async() => {
    const iconElm = await page.find('se-snackbar >>> .se-icon');
    const closeElm = await page.find('se-snackbar >>> .close');
    expect(iconElm).toBeTruthy();
    expect(iconElm).toEqualText('information_circle');
    expect(closeElm).toBeTruthy();
    expect(closeElm).toEqualText('dismiss');
  });

  it('should have an error class when the type is set to error', async() => {
    await page.$eval('se-snackbar', (elm: any) => {
      elm.type = 'error';
    });
    await page.waitForChanges();

    expect(element).toHaveClass('error');
  });

  it('should have a "show" class when opened', async() => {
    await page.$eval('se-snackbar', (elm: any) => {
      elm.open = true;
    });
    await page.waitForChanges();

    expect(element).toHaveClass('show');
  });

  it('emits the didClose event when dismissing the snackbar', async() => {
    const eventSpy = await page.spyOnEvent('didClose');
    await page.$eval('se-snackbar', (elm: any) => {
      elm.open = true;
    });
    await page.waitForChanges();

    const closeElm = await page.find('se-snackbar >>> .close');
    await closeElm.click();
    expect(eventSpy).toHaveReceivedEvent();
  });
});