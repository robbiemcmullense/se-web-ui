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
		expect(page.root.shadowRoot.querySelector('li.stepper-item')).toBeTruthy();
	});

	it('should render with se-icon and se-divider elements', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('span.indicator')).toBeTruthy();
		expect(page.root.shadowRoot.querySelector('se-divider')).toBeTruthy();
	});

	it('should render the label property as the inner text of a list item element', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item label="My Label"></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('.stepper-item').innerHTML).toEqual('My Label');
	});

	it('should not render the se-divider when is-last is true', async() => {
		const page = await newSpecPage({
			components: [StepperItemComponent],
			html: `<se-stepper-item is-last="true"></se-stepper-item>`,
		});
		expect(page.root.shadowRoot.querySelector('se-divider')).not.toBeTruthy();
	});

	it('should emit the didClick event when clicking on a stepper item', () => {
		const eventSpy = jest.spyOn(stepperItem.didClick, 'emit');
		stepperItem.emitEvent(); // user clicks on stepper item
		expect(eventSpy).toHaveBeenCalled();
	});
});