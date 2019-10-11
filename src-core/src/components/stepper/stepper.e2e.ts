import { newE2EPage } from '@stencil/core/testing';

describe('StepperItemComponent', () => {
  let page, hostElement, navElement, listElement;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-stepper></se-stepper>');
    hostElement = await page.find('se-stepper');
    navElement = await page.find('se-stepper >>> nav');
    listElement = await page.find('se-stepper >>> ol');
  });

  it('renders', async() => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('renders with HTML nav and ol elements', async() => {
    expect(navElement).toBeTruthy();
    expect(listElement).toBeTruthy();
  });

  it('should have a primary class on the nav element, to reflect the default color property', async() => {
    expect(navElement).toHaveClass('primary');
  });

  it('sets the class of the nav element to alternative when the component is assigned that color property', async() => {
    hostElement.setProperty('color', 'alternative');
    await page.waitForChanges();
    expect(navElement).toHaveClass('alternative');
  });
});