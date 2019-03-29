import { newE2EPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox value="my value"></se-checkbox>');
    element = await page.find('se-checkbox');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a primary color by default', async() => {
    const renderedHTML = '<label class="checkbox-container">'
    + '<input type="checkbox" />'
    + '<span class="checkmark" data-color="primary"></span></label>';
    expect(element.shadowRoot).toEqualHtml(renderedHTML);
  });

  it('renders with a disabled input element when the parent element has disabled=true', async() => {
    await page.$eval('se-checkbox', (elm: any) => {
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
