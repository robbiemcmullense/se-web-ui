import { newE2EPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox id="my-checkbox" value="my value"></se-checkbox>');
    element = await page.find('se-checkbox');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('should render with the checkbox and standard classes to reflect the default option and background properties', async() => {
    expect(element).toHaveClasses(['checkbox', 'hydrated', 'standard']);
  });
  
  it('renders with an id on the input element with the wc prefix', async() => {
    const inputElm = element.shadowRoot.querySelector('input');
    expect(inputElm).toHaveAttribute('id');
    expect(inputElm.getAttribute('id')).toEqual('wc-my-checkbox');
  });

  it('renders with a disabled class and a disabled input element when the parent element has disabled=true', async() => {
    await page.$eval('se-checkbox', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    const inputElm = element.shadowRoot.querySelector('input');
    expect(element).toHaveClass('disabled');
    expect(inputElm.disabled).toBeTruthy();
  });

  it('emits an event when clicked on', async() => {
    const eventSpy = await page.spyOnEvent('didChange');
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({
      value: 'my value',
      selected: true
    });
  });
});

describe('CheckboxComponent in Switch Mode', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox id="my-switch" option="switch" label="my label"></se-checkbox>');
    element = await page.find('se-checkbox');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('should render with the switch class', async() => {
    expect(element).toHaveClass('switch');
  });

  it('renders with an id on the input element with the wc prefix', async() => {
    const inputElm = element.shadowRoot.querySelector('input');
    expect(inputElm).toHaveAttribute('id');
    expect(inputElm.getAttribute('id')).toEqual('wc-my-switch');
  });

  it('should render a label element within the checkbox-label span element', async() => {
    let labelElement = await page.find('se-checkbox >>> span.checkbox-label');
    expect(labelElement.innerText).toEqual('my label');
  });
});

describe('CheckboxComponent in OnOff Mode', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox id="on-off-switch" option="onoff" header="true"></se-checkbox>');
    element = await page.find('se-checkbox');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });
  
  it('should render with the onoff and header classes, based on the specified properties', async() => {
    expect(element).toHaveClass('onoff');
    expect(element).toHaveClass('header');
  });

  it('should render two button elements with "ON" and "OFF" values', async() => {
    let onButton = await page.find('se-checkbox >>> button.active');
    let offButton = await page.find('se-checkbox >>> button.inactive');
    expect(onButton.innerText).toEqual('ON');
    expect(offButton.innerText).toEqual('OFF');
  });

  it('should render id attributes on the two button elements based on its parent id', async() => {
    let onButton = await page.find('se-checkbox >>> button.active');
    let offButton = await page.find('se-checkbox >>> button.inactive');
    expect(onButton.getAttribute('id')).toEqual('wc-on-off-switch-active');
    expect(offButton.getAttribute('id')).toEqual('wc-on-off-switch-inactive');
  });
});