import { newE2EPage } from '@stencil/core/testing';

describe('StepperItemComponent', () => {
  let page, element;

  beforeEach(async() => {
    page = await newE2EPage();
    await page.setContent('<se-stepper-item></se-stepper-item>');
    element = await page.find('se-stepper-item >>> div');
  });

  it('renders', async() => {
    expect(element).toBeTruthy();
    expect(element).toHaveClass('stepper-item-wrapper');
  });
});