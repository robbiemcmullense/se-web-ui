import { newE2EPage } from '@stencil/core/testing';

describe('RadioComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio value="my value"></se-radio>');
    element = await page.find('se-radio');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a disabled input element when the parent element has disabled=true', async() => {
    await page.$eval('se-radio', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    const inputElm = element.shadowRoot.querySelector('input');
    expect(inputElm.disabled).toBeTruthy();
  });

  it('emits an event when clicked on', async() => {
    const eventSpy = await page.spyOnEvent('didCheck');
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({
      value: 'my value',
      selected: true
    })
  });
});