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

  it('should not be the last stepper item by defualt', () => {
    expect(stepperItem.isLast).toBeFalsy();
	});
	
	it('should render with a list item with the stepper-item class', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('li.stepper-item')).toBeTruthy();
	});

	it('should render with se-icon and se-divider elements', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
		expect(page.root.shadowRoot.querySelector('se-divider')).toBeTruthy();
	});

	it('should not render the se-divider when is-last is true', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item is-last="true"></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('se-divider')).not.toBeTruthy();
	});
});