import { newE2EPage } from '@stencil/core/testing';

describe('ButtonComponent', () => {
  let page, hostElement, buttonElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-button>My Button</se-button>');
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
    hostElement.setProperty('option', 'raised');
    hostElement.setProperty('size', 'medium');
    hostElement.setProperty('color', 'alternative');
    await page.waitForChanges();
    expect(buttonElement).toHaveClasses(['alternative', 'medium', 'raised']);
  });

  it('renders an se-icon element when the element has an icon property', async() => {
    hostElement.setProperty('icon', 'close');
    await page.waitForChanges();
    expect(buttonElement.querySelector('se-icon')).toBeTruthy();
    expect(buttonElement.querySelector('se-icon').innerText).toEqual('close');
  });

  it('renders the display-block class on the host element when the block property is set to true', async() => {
    hostElement.setProperty('block', true);
    await page.waitForChanges();
    expect(hostElement).toHaveClass('display-block');
  });

  it('renders the minifab class on the host element when the option property is set to minifab', async() => {
    hostElement.setProperty('option', 'minifab');
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

describe('Button Component Screenshots', () => {
  it('tests multiple version of the button', async() => {
    let page = await newE2EPage();
    await page.setContent(`
      <se-button option="flat">validate</se-button>
      <se-button option="flat" color="secondary">standard</se-button>
      <se-button option="outline">Cancel</se-button>
      <se-button option="outline" color="primary">Assign IP Address</se-button>
      <se-button option="flat" color="primary">Generate Task</se-button>
      <se-button option="outline" color="secondary">Contact</se-button>
      <se-button option="raised" color="primary" icon="new_project">Create New Project</se-button>`
    );
    await page.compareScreenshot('multiple buttons', {fullPage: false});
  });
});