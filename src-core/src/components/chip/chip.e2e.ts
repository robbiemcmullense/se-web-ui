import { newE2EPage } from '@stencil/core/testing';

describe('ChipComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-chip></se-chip>');
    element = await page.find('se-chip >>> .se-chip');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
  });

  it('should have a class equal to standard to reflect its default color', () => {
    expect(element).toHaveClass('standard');
  });

  it('should have a disabled class when the disabled property is set to true', async() => {
    await page.$eval('se-chip', (elm: any) => {
      elm.selected = true;
    });
    await page.waitForChanges();
    expect(element).toHaveClass('selected');
  });

  it('should have a disabled class when the disabled property is set to true', async() => {
    await page.$eval('se-chip', (elm: any) => {
      elm.disabled = true;
    });
    await page.waitForChanges();
    expect(element).toHaveClass('disabled');
  });

  it('should have a display-block class when the block property is set to true', async() => {
    await page.$eval('se-chip', (elm: any) => {
      elm.block = true;
    });
    await page.waitForChanges();
    expect(element).toHaveClass('display-block');
  });

  it('should render HTML with the passed value', async() => {
    await page.$eval('se-chip', (elm: any) => {
      elm.value = 'My Value';
    });
    await page.waitForChanges();
    const element = await page.find('se-chip >>> div.value');
    expect(element.innerText).toEqual('My Value');
  });

  it('should emit a close event when the chip is clicked and the canClose property is true', async() => {
    await page.$eval('se-chip', (elm: any) => {
      elm.value = 'My Value';
      elm.canClose = true;
    });
    await page.waitForChanges();
    const eventSpy = await page.spyOnEvent('didClose');
    const element = await page.find('se-chip >>> div.close');
    await element.click();
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