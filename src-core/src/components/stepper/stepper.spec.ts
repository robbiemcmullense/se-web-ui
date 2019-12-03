import { StepperComponent } from './stepper';
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

	it('should not be linear by default', () => {
		expect(stepper.linear).toBeFalsy();
	});

	it('should render with a nav element, and a div element with the class stepper-item-wrapper', async() => {
		const page = await newSpecPage({
			components: [StepperComponent],
			html: `<se-stepper>
				<se-stepper-item label="Item 1"></se-stepper-item>
				<se-stepper-item label="Item 2"></se-stepper-item>
			</se-stepper>`,
		});
		expect(page.root.shadowRoot.querySelector('nav')).toBeTruthy();
		expect(page.root.shadowRoot.querySelector('.stepper-item-wrapper')).toBeTruthy();
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

	it('should have 2 stepper items, setting the selected property to the first stepper item and the isLast property to the second stepper item', () => {	
		stepper.componentDidLoad();
		expect(stepper.stepperItems.length).toEqual(2);
		expect(stepper.stepperItems[0].isLast).toBeFalsy();
		expect(stepper.stepperItems[0].selected).toBeTruthy();
	});

	it('should set the validated property to false for all stepper items when the reset method is called', () => {
		stepper.componentDidLoad();
		stepper.stepperItems[0].setAttribute('validated', true);
		stepper.reset();
		expect(stepper.stepperItems[0].validated).toBeFalsy();
		expect(stepper.stepperItems[1].validated).toBeFalsy();
	});
});