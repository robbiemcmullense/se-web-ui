import { CheckboxComponent } from './checkbox';
import { newSpecPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
	let checkbox;

	beforeEach(() => {
		checkbox = new CheckboxComponent();
	});

	it('should create a checkbox component', () => {
		expect(checkbox).toBeTruthy();
	});

	it('should have the checkbox option by default', () => {
		expect(checkbox.option).toEqual('checkbox');
	});

	it('should have its color set to "primary" by default', () => {
		expect(checkbox.color).toEqual('primary');
	});

	it('should not be disabled by default', () => {
		expect(checkbox.disabled).toBeFalsy();
	});

	it('should not be checked by default', () => {
		expect(checkbox.checked).toBeFalsy();
	});

	it('should not be required by default', () => {
		expect(checkbox.required).toBeFalsy();
	});

	it('should set required to true when the setRequired method is called', () => {
		checkbox.setRequired();
		expect(checkbox.required).toBeTruthy();
	});

	it('should have the "standard" background by default', () => {
		expect(checkbox.background).toEqual('standard');
	});

	it('should have textOn and textOff values equal to "ON" and "OFF" initially', () => {
		expect(checkbox.textOn).toEqual('ON');
		expect(checkbox.textOff).toEqual('OFF');
	});

	it('should have a header value equal to false initially', () => {
		expect(checkbox.header).toBeFalsy();
	});

	it('should render in checkbox mode by default', async() => {
		const page = await newSpecPage({
			components: [CheckboxComponent],
			html: `<se-checkbox label="my label" required="true"></se-checkbox>`,
		});
		expect(page.root.shadowRoot.querySelector('input')).toBeTruthy();
	});

	it('should render in switch mode without a required asterisk', async() => {
		const page = await newSpecPage({
			components: [CheckboxComponent],
			html: `<se-checkbox option="switch" label="my label"></se-checkbox>`,
		});
		expect(page.root.shadowRoot.querySelector('.checkbox-label')).toBeTruthy();
	});

	it('should render in switch mode with a required asterisk', async() => {
		const page = await newSpecPage({
			components: [CheckboxComponent],
			html: `<se-checkbox option="switch" label="my label" required="true"></se-checkbox>`,
		});
		expect(page.root.shadowRoot.querySelector('.required')).toBeTruthy();
	});

	it('should render in onoff mode with unique markup and ON and OFF labels', async() => {
		const page = await newSpecPage({
			components: [CheckboxComponent],
			html: `<se-checkbox option="onoff"></se-checkbox>`,
		});
		expect(page.root.shadowRoot.querySelector('.on-off-wrapper')).toBeTruthy();
	});

	it('should be checked when selected is set to true', () => {
		checkbox.selected = true;
		checkbox.componentDidLoad();
		expect(checkbox.checked).toBeTruthy();
	});

	it('should call the setElementId function when the component loads', async() => {
		const eventSpy = jest.spyOn(checkbox, 'setElementId');
		checkbox.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should emit the didChange event when the emitEvent function is executed', async() => {
		const eventSpy = jest.spyOn(checkbox.didChange, 'emit');
		checkbox.emitEvent();  // user clicks on the checkbox
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should not emit the didChange event when the checkbox is disabled', async() => {
		const eventSpy = jest.spyOn(checkbox.didChange, 'emit');
		checkbox.disabled = true;
		checkbox.emitEvent(); // user clicks on the checkbox
		expect(eventSpy).not.toHaveBeenCalled();
	});
});