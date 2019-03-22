import { newE2EPage } from '@stencil/core/testing';

describe('RadioOnOffComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio-on-off></se-radio-on-off>');
    element = await page.find('se-radio-on-off');
  });
  
  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('should have the default and standard classes', async() => {
    expect(element).toHaveClasses(['default', 'hydrated', 'standard']);
  });

  it('should render header and alternative classes when these properties are set', async() => {
    await page.$eval('se-radio-on-off', (elm: any) => {
      elm.option = 'header';
      elm.color = 'alternative'
    });
    await page.waitForChanges();
    expect(element).toHaveClasses(['alternative', 'header', 'hydrated']);
  });
});

describe('RadioOnOff Button Tests', () => {
  let page, activeElm, inactiveElm;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio-on-off></se-radio-on-off>');
    activeElm = await page.find('se-radio-on-off >>> .active');
    inactiveElm = await page.find('se-radio-on-off >>> .inactive');
  });

  it('has on and off text by default', async() => {
    expect(activeElm.innerText).toEqual('ON');
    expect(inactiveElm.innerText).toEqual('OFF');
  });

  it('has open and close text values when the properties are changed', async() => {
    await page.$eval('se-radio-on-off', (elm: any) => {
      elm.textOn = 'open';
      elm.textOff = 'close'
    });
    await page.waitForChanges();

    expect(activeElm.innerText).toEqual('open');
    expect(inactiveElm.innerText).toEqual('close');
  });

  it('sets an active class selected button, and emits either a true or false value', async() => {
    const eventSpy = await page.spyOnEvent('change');
    
    await activeElm.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(activeElm).toHaveClass('selected');
    expect(eventSpy).toHaveReceivedEventDetail({
      selected: true
    });

    await inactiveElm.click();
    expect(inactiveElm).toHaveClass('selected');
    expect(activeElm).not.toHaveClass('selected');
    expect(eventSpy).toHaveReceivedEventDetail({
      selected: false
    });
  });
});