import { newE2EPage } from '@stencil/core/testing';

describe('ButtonComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-button></se-button>');
    element = await page.find('se-button');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a flat option and an icon with standard option', async() => {
    await page.$eval('se-button', (elm: any) => {
      elm.icon = 'close';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('hasIcon');
    expect(element.shadowRoot.querySelector('button')).toHaveClass('standard');
    expect(element.shadowRoot.querySelector('button')).toHaveClass('flat');
  });

});

describe('Button with Preset Text', () => {
  it('renders with a flat option and text equal to My Button', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-button>My Button</se-button>');

    const element = await page.find('se-button');
    expect(element.innerText).toEqual('My Button');
    expect(element.shadowRoot.querySelector('button')).toHaveClass('standard');
  });
});

describe('ButtonComponent Methods', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-button></se-button>');
    element = await page.find('se-button');
  });

  it('sets a grouped class on the host element when the setGrouped method is called', async() => {
    await element.callMethod('setGrouped');
    await page.waitForChanges();
    expect(element).toHaveClass('grouped');
  });
});

describe('ButtonComponent Event', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-button value="My Test Value"></se-button>');
    element = await page.find('se-button');
  });

  it('sends button data when clicked and has the grouped property', async() => {
    const eventSpy = await page.spyOnEvent('clicked');
    await element.callMethod('setGrouped');
    await page.waitForChanges();
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({
      selected: true,
      value: 'My Test Value'});
  });
});