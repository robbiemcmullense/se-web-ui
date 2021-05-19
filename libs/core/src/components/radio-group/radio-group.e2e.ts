import { newE2EPage } from '@stencil/core/testing';

describe('RadioGroupComponent', () => {
  let page, parentElement, firstButtonElement, secondButtonElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-radio-group color="primary"><se-button id="first" value="first">Primary</se-button><se-button id="second" value="second">Secondary</se-button></se-radio-group>'
    );
    parentElement = await page.find('se-radio-group');
    firstButtonElement = await page.find(
      'se-radio-group se-button#first >>> button'
    );
    secondButtonElement = await page.find(
      'se-radio-group se-button#second >>> button'
    );
    await page.waitForChanges();
  });

  it('renders', async () => {
    expect(parentElement).toBeTruthy();
    expect(parentElement).toHaveClass('hydrated');
  });

  it('renders with two se-button components each with flat, primary, and small classes to reflect the default option, color, and size', async () => {
    expect(firstButtonElement).toHaveClasses(['flat', 'primary', 'small']);
    expect(secondButtonElement).toHaveClasses(['flat', 'primary', 'small']);
  });
});

describe('RadioComponent with an initialized value', () => {
  let page, firstButtonElement, secondButtonElement, parentElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-radio-group value="first"><se-button id="first" value="first">Primary</se-button><se-button id="second" value="second">Secondary</se-button></se-radio-group>'
    );
    await page.waitForChanges();
    parentElement = await page.find('se-radio-group');
    firstButtonElement = await page.find(
      'se-radio-group se-button#first >>> button'
    );
    secondButtonElement = await page.find(
      'se-radio-group se-button#second >>> button'
    );
  });

  it('should mark the first button as selected', async () => {
    expect(firstButtonElement).toHaveClass('selected');
  });

  it('should mark the second button as selected, and emit the se-button didClick event when clicked', async () => {
    const eventSpy = await page.spyOnEvent('didClick');
    await secondButtonElement.click();
    expect(secondButtonElement).toHaveClass('selected');
    expect(eventSpy).toHaveReceivedEventDetail({
      selected: true,
      value: 'second',
    });
  });

  it('should emit an event with the value of the second button item when clicked on', async () => {
    await secondButtonElement.click();
    expect(parentElement).toHaveAttribute('value');
  });
});

describe('RadioComponent with an initialized disabled property', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-radio-group disabled="true"><se-radio id="first" value="first" label="Radio One"></se-radio><se-radio id="second" value="second" label="Radio Two"></se-radio></se-radio-group>'
    );
    await page.waitForChanges();
  });

  it('should mark the radio elements as disabled, and render a label for each child radio component', async () => {
    const radioOne = await page.find(
      'se-radio-group se-radio#first >>> .radio-label'
    );
    const radioTwo = await page.find(
      'se-radio-group se-radio#second >>> .radio-label'
    );
    expect(radioOne).toHaveAttribute('aria-disabled');
    expect(radioTwo).toHaveAttribute('aria-disabled');
  });

  it('should render a label for each child component', async () => {
    const radioOne = await page.find(
      'se-radio-group se-radio#first >>> .radio-label'
    );
    const radioTwo = await page.find(
      'se-radio-group se-radio#second >>> .radio-label'
    );
    expect(radioOne.innerText).toEqual('Radio One');
    expect(radioTwo.innerText).toEqual('Radio Two');
  });
});
describe('RadioComponent with se-radio', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(
      '<se-radio-group><se-radio id="first" value="first" label="Radio One"></se-radio><se-radio id="second" value="second" label="Radio Two"></se-radio></se-radio-group>'
    );
    await page.waitForChanges();
  });

  it('should mark the radio elements as disabled, and render a label for each child radio component', async () => {
    const radioOne = await page.find(
      'se-radio-group se-radio#first >>> .radio-label'
    );
    const radioTwo = await page.find(
      'se-radio-group se-radio#second >>> .radio-label'
    );
    expect(radioOne).not.toHaveAttribute('aria-disabled');
    expect(radioTwo).not.toHaveAttribute('aria-disabled');
  });
});

describe('Radio Group Screenshots', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders with child radio components', async () => {
    await page.setContent(`
      <se-radio-group>
        <se-radio value="one radio" label="First Radio Button"></se-radio>
        <se-radio value="two radio" label="Second Radio Button" selected="true"></se-radio>
        <se-radio value="three radio" label="Third Radio Button"></se-radio>
      </se-radio-group>
    `);
    await page.compareScreenshot('Radio Group with Radio Buttons', {
      fullPage: false,
    });
  });

  it('renders with child button components', async () => {
    await page.setContent(`
      <se-radio-group>
        <se-button value="first">Check1</se-button>
        <se-button value="second">Check2</se-button>
        <se-button value="third">Check3</se-button>
      </se-radio-group>
    `);
    await page.compareScreenshot('Radio Group with Child SE-Buttons', {
      fullPage: false,
    });
  });
});
