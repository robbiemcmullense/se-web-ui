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

  it('renders with a flat mode and an icon with standard mode', async() => {
    // const renderedHTML = '<button class="primary flat"><se-icon class="hydrated small">close</se-icon><slot></slot></button>'
    await page.$eval('se-button', (elm: any) => {
      elm.icon = 'close';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('hasIcon');
    expect(element.shadowRoot.querySelector('button')).toHaveClass('standard');
    expect(element.shadowRoot.querySelector('button')).toHaveClass('flat');

  });

  it('renders with an active class when clicked', async() => {
    await element.click();
    expect(element).toHaveClass('active');
  });
});

describe('Button with Preset Text', () => {
  it('renders with a flat mode and text equal to My Button', async() => {
    const page = await newE2EPage();
    // const renderedHTML = '<button class="primary flat"><slot></slot></button>'
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


  it('changes the color when the setColor method is called', async() => {
    await element.callMethod('setColor', 'accent');
    await page.waitForChanges();
    expect(element.shadowRoot.querySelector('button')).toHaveClass('standard');
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

  it('sends button data when clicked', async() => {
    element.setGrouped();
    const eventSpy = await page.spyOnEvent('clicked');
    await element.click();
    expect(eventSpy).toHaveReceivedEvent();
  });
});



