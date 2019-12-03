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

	it('should not be required by default', () => {
		expect(stepperItem.required).toBeFalsy();
	});
	
	it('should render with a list item with the stepper-item class', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
	});

	it('should render with a navitem-hidden class by default', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item></se-stepper-item>`,
		});
		expect(page.root).toHaveClass('navitem-hidden');
	});

	it('should emit the itemValidated event when the validated property changes', () => {
		const eventSpy = jest.spyOn(stepperItem.itemValidated, 'emit');
		stepperItem.validatedDidChange(); // validated property changes
		expect(eventSpy).toHaveBeenCalled();
	});
});