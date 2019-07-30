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
