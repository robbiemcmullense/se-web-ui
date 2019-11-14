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
    element.setProperty('disabled', true);
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

describe('Radio with ID Element', () => {
  it('renders the child button element with an id attribute beginning with the wc prefix', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-radio id="my-id"></se-radio>');

    const element = await page.find('se-radio');
    expect(element.shadowRoot.querySelector('input')).toHaveAttribute('id');
    expect(element.shadowRoot.querySelector('input').getAttribute('id')).toEqual('wc-my-id');
  });
});

describe('Radio Screenshots', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
  });

  it('renders in both primary and secondary colors', async() => {
    await page.setContent(`
      <se-radio value="standard-radio" label="Unchecked Radio Button"></se-radio>
      <se-radio value="radio-primary" label="Radio Primary" selected="true"></se-radio>
      <se-radio value="radio-secondary" label="Radio Secondary" selected="true"color="secondary"></se-radio>
    `);
    await page.compareScreenshot('Radio Components', {fullPage: false});
  });
});