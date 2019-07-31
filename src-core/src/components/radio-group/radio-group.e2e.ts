import { newE2EPage } from '@stencil/core/testing';

describe('RadioGroupComponent', () => {
  let page, parentElement, firstButtonElement, secondButtonElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio-group color="primary"><se-button id="first" value="first">Primary</se-button><se-button id="second" value="second">Secondary</se-button></se-radio-group>');
    parentElement = await page.find('se-radio-group');
    firstButtonElement = await page.find('se-radio-group se-button#first >>> button');
    secondButtonElement = await page.find('se-radio-group se-button#second >>> button');
    await page.waitForChanges();
  });

  it('renders', async() => {
    expect(parentElement).toBeTruthy();
    expect(parentElement).toHaveClass('hydrated');
  });

  it('renders with two se-button components each with flat, primary, and small classes to reflect the default option, color, and size', async() => {
    expect(firstButtonElement).toHaveClasses(['flat', 'primary', 'small']);
    expect(secondButtonElement).toHaveClasses(['flat', 'primary', 'small']);
  });
});

describe('RadioComponent with an initialized value', () => {
  let page, firstButtonElement, secondButtonElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-radio-group value="first"><se-button id="first" value="first">Primary</se-button><se-button id="second" value="second">Secondary</se-button></se-radio-group>');
    await page.waitForChanges();
    firstButtonElement = await page.find('se-radio-group se-button#first >>> button');
    secondButtonElement = await page.find('se-radio-group se-button#second >>> button');
  });

  it('should mark the first button as selected', async() => {
    expect(firstButtonElement).toHaveClass('selected');
  });

  it('should mark the second button as selected, and emit the se-button didChange event when clicked', async() => {
    const eventSpy = await page.spyOnEvent('didClick');
    await secondButtonElement.click();
    expect(secondButtonElement).toHaveClass('selected');
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail({
      selected: true,
      value: 'second'});
  });

  it('should emit an event with the value of the first button item when clicked on', async() => {
    const eventSpy = await page.spyOnEvent('didChange');
    await firstButtonElement.click();
    expect(eventSpy).toHaveReceivedEvent();
    expect(eventSpy).toHaveReceivedEventDetail('first');
  });
});

describe('RadioComponent with an initialized disabled property', () => {
  let page;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-radio-group disabled="true"><se-radio id="first" value="first" label="Radio One"></se-radio><se-radio id="second" value="second" label="Radio Two"></se-radio></se-radio-group>');
    await page.waitForChanges();
  });

  it('should mark the radio elements as disabled, and render a label for each child radio component', async() => {
    const radioOne = await page.find('se-radio-group se-radio#first >>> label');
    const radioTwo = await page.find('se-radio-group se-radio#second >>> label');
    expect(radioOne).toHaveAttribute('data-disabled');
    expect(radioTwo).toHaveAttribute('data-disabled');
  });

  it('should render a label for each child component', async() => {
    const radioOne = await page.find('se-radio-group se-radio#first >>> label');
    const radioTwo = await page.find('se-radio-group se-radio#second >>> label');
    expect(radioOne.innerText).toEqual('Radio One');
    expect(radioTwo.innerText).toEqual('Radio Two');
  });
});
