import { newE2EPage } from '@stencil/core/testing';

describe('StepperItemComponent', () => {
  let page, element;

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent('<se-stepper-item></se-stepper-item>');
    element = await page.find('se-stepper-item');
  });

  it('renders', async () => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders with a menuitem-hidden class by default as it is not active', async () => {
    expect(element).toHaveClass('navitem-hidden');
  });

  it('removes the navitem-hidden class when it is set to active', async () => {
    element.setProperty('active', true);
    await page.waitForChanges();
    expect(element).toHaveClass('active');
    expect(element).not.toHaveClass('navitem-hidden');
  });
});
