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
  });

  it('should render with the checkbox and standard classes to reflect the default option and background properties', async() => {
    expect(element).toHaveClasses(['checkbox', 'hydrated', 'standard']);
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
    await page.setContent('<se-checkbox option="switch" label="my label"></se-checkbox>');
    element = await page.find('se-checkbox');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('should render with the switch class', async() => {
    expect(element).toHaveClass('switch');
  });

  it('should render a label element without inner text', async() => {
    let labelElement = await page.find('se-checkbox >>> label.checkbox-container');
    expect(labelElement.innerText).toEqual('');
  });
});

describe('CheckboxComponent in OnOff Mode', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox option="onoff" header="true"></se-checkbox>');
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
});