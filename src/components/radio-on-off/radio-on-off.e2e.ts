import { newE2EPage } from '@stencil/core/testing';

describe.only('RadioOnOffComponent', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio-on-off></se-radio-on-off>');
  });
  
  it('renders', async() => {
    const element = await page.find('se-radio-on-off');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('has on and off text by default', async() => {
    const onElement = await page.find('se-radio-on-off >>> .active');
    const offElement = await page.find('se-radio-on-off >>> .inactive');
    expect(onElement.innerText).toEqual('ON');
    expect(offElement.innerText).toEqual('OFF');
  });

  it('has open and close text values when the properties are changed', async() => {
    await page.$eval('se-radio-on-off', (elm: any) => {
      elm.textOn = 'open';
      elm.textOff = 'close'
    });
    await page.waitForChanges();
    const onElement = await page.find('se-radio-on-off >>> .active');
    const offElement = await page.find('se-radio-on-off >>> .inactive');
    expect(onElement.innerText).toEqual('open');
    expect(offElement.innerText).toEqual('close');
  });

  it('sets an active class to the "ON" button when clicked', async() => {
    const eventSpy = await page.spyOnEvent('change');
    const activeElement = await page.find('se-radio-on-off >>> .active');
    const inactiveElement = await page.find('se-radio-on-off >>> .inactive');
    
    await activeElement.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(activeElement).toHaveClass('selected');

    await inactiveElement.click();
    expect(inactiveElement).toHaveClass('selected');
    expect(activeElement).not.toHaveClass('selected');
  });

  it('sets emits an event with the selected:true value when the "on" button is clicked', async() => {
    const eventSpy = await page.spyOnEvent('change');
    const activeElement = await page.find('se-radio-on-off >>> .active');
    
    await activeElement.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({
      selected: true
    });
  });
});