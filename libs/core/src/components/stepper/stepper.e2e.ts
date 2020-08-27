import { newE2EPage } from '@stencil/core/testing';

describe('StepperItemComponent', () => {
  let page, hostElement, navElement, listElement;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-stepper></se-stepper>');
    hostElement = await page.find('se-stepper');
    navElement = await page.find('se-stepper >>> nav');
    listElement = await page.find('se-stepper >>> ol');
  });

  it('renders', async () => {
    expect(hostElement).toBeTruthy();
    expect(hostElement).toHaveClass('hydrated');
  });

  it('renders with HTML nav and ol elements', async () => {
    expect(navElement).toBeTruthy();
    expect(listElement).toBeTruthy();
  });

  it('should have a primary class on the nav element, to reflect the default color property', async () => {
    expect(navElement).toHaveClass('primary');
  });

  it('sets the class of the nav element to alternative when the component is assigned that color property', async () => {
    hostElement.setProperty('color', 'alternative');
    await page.waitForChanges();
    expect(navElement).toHaveClass('alternative');
  });
});

describe('Stepper Screenshots', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders the primary color by default', async () => {
    await page.setContent(`
      <se-stepper>
        <se-stepper-item label="Step 1"></se-stepper-item>
        <se-stepper-item label="Step 2"></se-stepper-item>
        <se-stepper-item label="Step 3"></se-stepper-item>
      </se-stepper>
    `);
    await page.compareScreenshot('stepper primary color', { fullPage: false });
  });

  it('renders the alternative color', async () => {
    await page.setContent(`
      <se-stepper color="alternative">
        <se-stepper-item label="Step 1"></se-stepper-item>
        <se-stepper-item label="Step 2"></se-stepper-item>
        <se-stepper-item label="Step 3"></se-stepper-item>
      </se-stepper>
    `);
    await page.compareScreenshot('stepper alternative color', {
      fullPage: false,
    });
  });
});
