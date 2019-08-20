import { newE2EPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
  let page, hostElement, checkboxElement, inputElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox id="my-checkbox" value="my value"></se-checkbox>');
    hostElement = await page.find('se-checkbox');
    checkboxElement = await page.find('se-checkbox >>> div');
    inputElement = await page.find('se-checkbox >>> input');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('should render with the checkbox and standard classes to reflect the default option and background properties', async() => {
    expect(checkboxElement).toHaveClasses(['checkbox', 'standard']);
  });
  
  it('renders with an id on the input element with the wc prefix', async() => {
    expect(inputElement).toHaveAttribute('id');
    expect(inputElement.getAttribute('id')).toEqual('wc-my-checkbox');
  });

  it('renders with a disabled class and a disabled input element when the parent element has disabled=true', async() => {
    await page.$eval('se-checkbox', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    expect(checkboxElement).toHaveClass('disabled');
  });

  it('emits an event when clicked on', async() => {
    const eventSpy = await page.spyOnEvent('didChange');
    await hostElement.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({
      value: 'my value',
      selected: true
    });
  });
});

describe('CheckboxComponent in Switch Mode', () => {
  let page, hostElement, switchElement, inputElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox id="my-switch" option="switch" label="my label"></se-checkbox>');
    hostElement = await page.find('se-checkbox');
    switchElement = await page.find('se-checkbox >>> div');
    inputElement = await page.find('se-checkbox >>> input');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
  });

  it('should render with the switch class', async() => {
    expect(switchElement).toHaveClass('switch');
  });

  it('renders with an id on the input element with the wc prefix', async() => {
    expect(inputElement).toHaveAttribute('id');
    expect(inputElement.getAttribute('id')).toEqual('wc-my-switch');
  });

  it('should render a label element within the checkbox-label span element', async() => {
    let labelElement = await page.find('se-checkbox >>> span.checkbox-label');
    expect(labelElement.innerText).toEqual('my label');
  });
});

describe('CheckboxComponent in OnOff Mode', () => {
  let page, hostElement, onOffElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-checkbox id="on-off-switch" option="onoff" header="true"></se-checkbox>');
    hostElement = await page.find('se-checkbox');
    onOffElement = await page.find('se-checkbox >>> div');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
  });
  
  it('should render with the onoff and header classes, based on the specified properties', async() => {
    expect(onOffElement).toHaveClass('onoff');
    expect(onOffElement).toHaveClass('header');
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

describe('Checkbox Screenshots', () => {
  it('renders in standard checkbox option', async() => {
    let page = await newE2EPage();
    await page.setContent('<se-checkbox label="Label"></se-checkbox><se-checkbox selected="true" label="Label"></se-checkbox>'); 
    await page.compareScreenshot('Checkbox Checked and Unchecked', {fullPage: false});
  });
});

describe('Switch Screenshots', () => {
  it('renders in the toggle switch option', async() => {
    let page = await newE2EPage();
    await page.setContent('<se-checkbox option="switch" label="Label"></se-checkbox><se-checkbox option="switch" selected="true" label="Label"></se-checkbox>'); 
    await page.compareScreenshot('Switch Checked and Unchecked', {fullPage: false});
  });
});

describe('OnOff Screenshots', () => {
  it('renders as an on/off switch', async() => {
    let page = await newE2EPage();
    await page.setContent('<se-checkbox option="onoff" label="Label"></se-checkbox><se-checkbox option="onoff" selected="true" label="Label"></se-checkbox>'); 
    await page.compareScreenshot('On Off Switch', {fullPage: false});
  });
});