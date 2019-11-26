import { StepperItemComponent } from './stepper-item';
import { newSpecPage } from '@stencil/core/testing';

describe('StepperItemComponent', () => {
	let stepperItem;

	beforeEach(() => {
		stepperItem = new StepperItemComponent();
	});

	it('should build', () => {
		expect(stepperItem).toBeTruthy();
	});
	
	it('should not have a defined label by default', () => {
		expect(stepperItem.label).toBeUndefined();
	});

  it('should not be the last stepper item by defualt', () => {
    expect(stepperItem.isLast).toBeFalsy();
	});
	
	it('should render with a list item with the stepper-item class', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
	});
});