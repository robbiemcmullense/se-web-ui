import { newE2EPage } from '@stencil/core/testing';

describe('SnackbarComponent', () => {
  let page, hostElement, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-snackbar></se-snackbar>');
    hostElement = await page.find('se-snackbar');
    element = await page.find('se-snackbar >>> div');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('renders with an information class by default', async() => {
    expect(element).toHaveClass('information');
  });

  it('should have an icon element by default', async() => {
    const iconElm = await page.find('se-snackbar >>> .se-icon');
    expect(iconElm).toBeTruthy();
    expect(iconElm).toEqualText('information_circle');
  });

  it('should have an error class when the type is set to error', async() => {
    hostElement.setProperty('type', 'error');
    await page.waitForChanges();
    expect(element).toHaveClass('error');
  });

  it('should have a "show" class when opened', async() => {
    hostElement.setProperty('open', true);
    await page.waitForChanges();
    expect(hostElement).toHaveClass('show-snackbar');
  });

  it('emits the didClose event when dismissing the snackbar', async() => {
    const eventSpy = await page.spyOnEvent('didClose');
    hostElement.setProperty('open', true);
    hostElement.setProperty('canClose', true);
    await page.waitForChanges();

    const closeElm = await page.find('se-snackbar >>> .close');
    await closeElm.click();
    expect(eventSpy).toHaveReceivedEvent();
  });
});

describe('Snackbar Screenshots', () => {
  it('tests multiple versions of the snackbar', async() => {
    let page = await newE2EPage();
    await page.setContent(`
      <se-snackbar style="bottom: 170px;" open="true" icon="icon" message="Info"></se-snackbar>
      <se-snackbar style="bottom: 120px;" open="true" type="success" icon="icon" message="Success"></se-snackbar>
      <se-snackbar style="bottom: 70px;" open="true" type="warning" icon="icon" message="Warning"></se-snackbar>
      <se-snackbar open="true" type="error" icon="icon" message="error" can-close="true"></se-snackbar>
    `);
    await page.compareScreenshot('multiple snackbar components', {fullPage: false});
  });
});