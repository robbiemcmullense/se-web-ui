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
  });

  it('renders with the flat class by default', async() => {
    expect(element).toHaveClasses(['flat', 'hydrated']);
  });

  it('renders the child button component with flat, small, and standard classes by default reflecting its default option, size, and color', async() => {
    expect(element.shadowRoot.querySelector('button')).toHaveClasses(['flat', 'small', 'standard']);
  });

  it('applies the raised, medium, and alternative classes to the parent and child button elements when the option, size, and color are set to those values', async() => {
    await page.$eval('se-button', (elm: any) => {
      elm.option = 'raised';
      elm.size = 'medium';
      elm.color = 'alternative';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('raised');
    expect(element.shadowRoot.querySelector('button')).toHaveClasses(['alternative', 'medium', 'raised']);
  });

  it('renders the hasIcon class when the element has an icon property', async() => {
    await page.$eval('se-button', (elm: any) => {
      elm.icon = 'close';
    });
    await page.waitForChanges();
    expect(element).toHaveClass('hasIcon');
  });
});

describe('Button with Preset Text', () => {
  it('renders with a flat option and text equal to My Button', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-button>My Button</se-button>');

    const element = await page.find('se-button');
    expect(element.innerText).toEqual('My Button');
  });
});

describe('Button with ID Element', () => {
  it('renders the child button element with an id attribute beginning with the wc prefix', async() => {
    const page = await newE2EPage();
    await page.setContent('<se-button id="my-id">My Button</se-button>');

    const element = await page.find('se-button');
    expect(element.shadowRoot.querySelector('button')).toHaveAttribute('id');
    expect(element.shadowRoot.querySelector('button').getAttribute('id')).toEqual('wc-my-id');
  });
});

describe('ButtonComponent Methods and Events', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-button value="My Test Value"></se-button>');
    element = await page.find('se-button');
  });

  it('sets a grouped class on the host element when the setGrouped method is called', async() => {
    await element.callMethod('setGrouped');
    await page.waitForChanges();
    expect(element).toHaveClass('grouped');
  });

  it('sends button data when clicked and adds the selected class to the child button element', async() => {
    const eventSpy = await page.spyOnEvent('didClick');
    await element.callMethod('setGrouped');
    await page.waitForChanges();
    await element.click();

    expect(element.shadowRoot.querySelector('button')).toHaveClass('selected');
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({
      selected: true,
      value: 'My Test Value'});
  });
});