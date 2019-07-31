import { newE2EPage } from '@stencil/core/testing';

describe('ButtonComponent', () => {
  let page, hostElement, buttonElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-button></se-button>');
    hostElement = await page.find('se-button');
    buttonElement = await page.find('se-button >>> button');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('renders the child button component with flat, small, and standard classes by default reflecting its default option, size, and color', async() => {
    expect(buttonElement).toHaveClasses(['flat', 'small', 'standard']);
  });

  it('applies the raised, medium, and alternative classes to the parent and child button elements when the option, size, and color are set to those values', async() => {
    await page.$eval('se-button', (elm: any) => {
      elm.option = 'raised';
      elm.size = 'medium';
      elm.color = 'alternative';
    });
    await page.waitForChanges();
    expect(buttonElement).toHaveClasses(['alternative', 'medium', 'raised']);
  });

  it('renders the hasIcon class when the element has an icon property', async() => {
    await page.$eval('se-button', (elm: any) => {
      elm.icon = 'close';
    });
    await page.waitForChanges();
    expect(buttonElement).toHaveClass('hasIcon');
  });

  it('renders the display-block class on the host element when the block property is set to true', async() => {
    await page.$eval('se-button', (elm: any) => {
      elm.block = true;
    });
    await page.waitForChanges();
    expect(hostElement).toHaveClass('display-block');
  });

  it('renders the minifab class on the host element when the option property is set to minifab', async() => {
    await page.$eval('se-button', (elm: any) => {
      elm.option = 'minifab';
    });
    await page.waitForChanges();
    expect(hostElement).toHaveClass('minifab');
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

    const element = await page.find('se-button >>> button');
    expect(element).toHaveAttribute('id');
    expect(element.getAttribute('id')).toEqual('wc-my-id');
  });
});

describe('ButtonComponent Methods', () => {
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
});