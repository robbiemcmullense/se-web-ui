import { newE2EPage } from '@stencil/core/testing';

describe('RadioOnOffComponent', () => {
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

  it('has open and close text when the properties are changed', async() => {
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
    const onElement = await page.find('se-radio-on-off >>> .active');
    const offElement = await page.find('se-radio-on-off >>> .inactive');
    
    onElement.click();
    await page.waitForChanges();
    expect(onElement).toHaveClass('selected');

    offElement.click();
    await page.waitForChanges();
    expect(offElement).toHaveClass('selected');
    expect(onElement).not.toHaveClass('selected');
  });
});