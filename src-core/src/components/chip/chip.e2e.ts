import { newE2EPage } from '@stencil/core/testing';

describe('ChipComponent', () => {
  let page, hostElement, childElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-chip></se-chip>');
    hostElement = await page.find('se-chip');
    childElement = await page.find('se-chip >>> .se-chip');
  });

  it('renders', async() => {
    expect(childElement).toBeTruthy();
  });

  it('should have a class equal to standard to reflect its default color', () => {
    expect(childElement).toHaveClass('standard');
  });

  it('should have a disabled class when the disabled property is set to true', async() => {
    hostElement.setProperty('selected', true);
    await page.waitForChanges();
    expect(childElement).toHaveClass('selected');
  });

  it('should have a disabled class when the disabled property is set to true', async() => {
    hostElement.setProperty('disabled', true);
    await page.waitForChanges();
    expect(childElement).toHaveClass('disabled');
  });

  it('should have a display-block class when the block property is set to true', async() => {
    hostElement.setProperty('block', true);
    await page.waitForChanges();
    expect(childElement).toHaveClass('display-block');
  });

  it('should render HTML with the passed value', async() => {
    hostElement.setProperty('value', 'My Value');
    await page.waitForChanges();
    const valueElm = await page.find('se-chip >>> div.value');
    expect(valueElm.innerText).toEqual('My Value');
  });

  it('should emit a close event when the chip is clicked and the canClose property is true', async() => {
    hostElement.setProperty('value', 'My Value');
    hostElement.setProperty('canClose', true);
    await page.waitForChanges();
    const eventSpy = await page.spyOnEvent('didClose');
    const closeElm = await page.find('se-chip >>> div.close');
    await closeElm.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail('My Value');
  });
});

describe('ChipComponent Screenshots', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage(); 
  });

  it('renders without a close icon by default', async() => {
    await page.setContent('<se-chip value="Default Chip"></se-chip>');
    element = await page.find('se-chip');
    expect(element).toBeTruthy();
    await page.compareScreenshot('Default Chip', {fullPage: false});
  });

  it('renders with a close icon when specified', async() => {
    await page.setContent('<se-chip can-close="true" value="Chip can Close"></se-chip>');
    element = await page.find('se-chip');
    expect(element).toBeTruthy();
    await page.compareScreenshot('Default Chip', {fullPage: false});
  });
});