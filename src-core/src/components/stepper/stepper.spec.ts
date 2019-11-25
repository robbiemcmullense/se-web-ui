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
	let stepper, nodeOne, nodeTwo, shadowRootOne, shadowRootTwo, contentNodeOne, contentNodeTwo;

	beforeEach(() => {
		stepper = new StepperComponent();
		
		nodeOne = document.createElement('se-stepper-item');
		nodeOne.setAttribute('label', 'Step 1');
		shadowRootOne = nodeOne.attachShadow({mode: 'open'});
		shadowRootOne.appendChild(document.createElement('span'));
		stepper.el.appendChild(nodeOne);

		nodeTwo = document.createElement('se-stepper-item');
		nodeOne.setAttribute('label', 'Step 2');
		shadowRootTwo = nodeTwo.attachShadow({mode: 'open'});
		shadowRootTwo.appendChild(document.createElement('span'));
		stepper.el.appendChild(nodeTwo);
		
		contentNodeOne = document.createElement('div');
		contentNodeOne.setAttribute('slot', 'stepper-item-content');
		stepper.el.appendChild(contentNodeOne);

		contentNodeTwo = document.createElement('div');
		contentNodeTwo.setAttribute('slot', 'stepper-item-content');
		stepper.el.appendChild(contentNodeTwo);
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

	it('should emit the optionSelected event when the 2nd stepper item is clicked on', () => {
		const event = {detail: {label: 'Step 2'}};
		const eventSpy = jest.spyOn(stepper.optionSelected, 'emit');
		stepper.componentDidLoad(); // initialize stepper and content items
		stepper.stepperItemClickedHandler(event);
		expect(eventSpy).toHaveBeenCalled();
	});
});