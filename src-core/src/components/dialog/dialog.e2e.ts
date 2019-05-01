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
  });

  it('should have the medium class to indicate its (default) medium size', async() => {
    expect(element).toHaveClasses(['hydrated', 'medium']);
  });

  it('emits the backdrop event when clicking on the background', async() => {
    const eventSpy = await page.spyOnEvent('backdrop');
    await element.callMethod('backdropClicked');
    expect(eventSpy).toHaveReceivedEvent();
  });
});