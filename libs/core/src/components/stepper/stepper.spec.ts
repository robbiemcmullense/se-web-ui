import { StepperComponent } from './stepper';
import '../mutation-observer-mock';
import { newSpecPage } from '@stencil/core/testing';

describe('StepperComponent', () => {
  let stepper;

  beforeEach(() => {
    stepper = new StepperComponent();
  });

  it('should build', () => {
    expect(stepper).toBeTruthy();
  });

  it('should have a primary color by default', () => {
    expect(stepper.color).toBe('primary');
  });

  it('should be linear by default', () => {
    expect(stepper.linear).toBeTruthy();
  });

  it('should be interactive by default', () => {
    expect(stepper.interactive).toBeTruthy();
  });

  it('should render with a nav element, and a div element with the class stepper-item-wrapper', async () => {
    const page = await newSpecPage({
      components: [StepperComponent],
      html: `<se-stepper>
				<se-stepper-item label="Item 1"></se-stepper-item>
				<se-stepper-item label="Item 2"></se-stepper-item>
			</se-stepper>`,
    });
    expect(page.root.shadowRoot.querySelector('nav')).toBeTruthy();
    expect(
      page.root.shadowRoot.querySelector('.stepper-item-wrapper')
    ).toBeTruthy();
  });
});

describe('Stepper Component methods', () => {
  let stepper, stepOne, stepTwo, stepThree;

  beforeEach(() => {
    stepper = new StepperComponent();

    stepOne = document.createElement('se-stepper-item');
    stepOne.setAttribute('label', 'Step 1');
    stepper.el.appendChild(stepOne);

    stepTwo = document.createElement('se-stepper-item');
    stepTwo.setAttribute('label', 'Step 2');
    stepper.el.appendChild(stepTwo);

    stepThree = document.createElement('se-stepper-item');
    stepThree.setAttribute('label', 'Step 3');
    stepper.el.appendChild(stepThree);
  });

  it('should have 3 stepper items, setting the selected property to the first stepper item and the isLast property to the third stepper item', () => {
    stepper.componentDidLoad();
    expect(stepper.stepperItems.length).toEqual(3);
    expect(stepper.stepperItems[0].isLast).toBeFalsy();
    expect(stepper.stepperItems[0].active).toBeTruthy();
  });

  it('should set the third stepper item as active when the next method is called twice with validated=true', () => {
    stepper.componentDidLoad();
    stepper.next(true);
    stepper.next(true);
    expect(stepper.stepperItems[0].active).toBeFalsy();
    expect(stepper.stepperItems[2].active).toBeTruthy();
  });

  it('should set the second stepper item as active when the next method is called twice with validated=true, then after the previous method is called', () => {
    stepper.componentDidLoad();
    stepper.next(true);
    stepper.next(true);
    stepper.previous();
    expect(stepper.stepperItems[1].active).toBeTruthy();
  });

  it('should set the validated property to false for all stepper items when the reset method is called without a parameter, and set the first item as active', () => {
    stepper.componentDidLoad();
    stepper.stepperItems[0].setAttribute('validated', true);
    stepper.reset();
    expect(stepper.stepperItems[0].validated).toBeFalsy();
    expect(stepper.stepperItems[1].validated).toBeFalsy();
    expect(stepper.stepperItems[2].validated).toBeFalsy();
    expect(stepper.stepperItems[0].active).toBeTruthy();
  });

  it('should set the second stepper item as active when the reset method is called with parameter equal to 2', () => {
    stepper.componentDidLoad();
    stepper.next(true);
    stepper.next(true);
    stepper.reset(2);
    expect(stepper.stepperItems[1].active).toBeTruthy();
  });
});
