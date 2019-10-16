import { newE2EPage } from '@stencil/core/testing';

describe('StepperItemComponent', () => {
  let page, hostElement, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-stepper-item></se-stepper-item>');
    hostElement = await page.find('se-stepper-item');
    element = await page.find('se-stepper-item >>> div');
  });

  it('renders, and the root element has a stepper-item-wrapper class', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('stepper-item-wrapper');
  });

  it('renders a li element with the class stepper-item', async() => {
    let listItem = await page.find('se-stepper-item >>> li');
    expect(listItem).toHaveClass('stepper-item');
  });

  it('renders span and se-divider elements', async() => {
    let iconElm = await page.find('se-stepper-item >>> span');
    let divider = await page.find('se-stepper-item >>> se-divider');
    expect(iconElm).toBeTruthy();
    expect(divider).toBeTruthy();
  });

  it('does not render a se-divider element when isLast is true', async() => {
    hostElement.setProperty('isLast', true);
    await page.waitForChanges();

    let divider = await page.find('se-stepper-item >>> se-divider');
    expect(divider).not.toBeTruthy();
  });
});