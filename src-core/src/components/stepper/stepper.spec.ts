import { StepperComponent } from './stepper';

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

	it('should not be linear by default', () => {
		expect(stepper.linear).toBeFalsy();
	});

	it('should not be validated by default', () => {
		expect(stepper.validated).toBeFalsy();
	});

});

describe('Stepper Component methods', () => {
	let stepper, nodeOne, nodeTwo;

	beforeEach(() => {
		stepper = new StepperComponent();
		
		nodeOne = document.createElement('se-stepper-item');
		nodeOne.setAttribute('label', 'Step 1');
		stepper.el.appendChild(nodeOne);

		nodeTwo = document.createElement('se-stepper-item');
		nodeTwo.setAttribute('label', 'Step 2');
		stepper.el.appendChild(nodeTwo);
	});

	it('should set the validated property to false for all stepper items when the reset method is called', () => {
		stepper.componentDidLoad();
		stepper.stepperItems[0].setAttribute('validated', true);
		stepper.reset();
		expect(stepper.stepperItems[0].validated).toBeFalsy();
		expect(stepper.stepperItems[1].validated).toBeFalsy();
	});

	it('should set the isLast property to the second stepper item when there are two stepper items', () => {	
		stepper.componentDidLoad();
		expect(stepper.stepperItems.length).toEqual(2);
		expect(stepper.stepperItems[0].isLast).toBeFalsy();
		expect(stepper.stepperItems[1]).not.toHaveClass('selected');
	});
});