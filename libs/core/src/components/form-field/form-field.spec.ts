import { FormFieldComponent } from './form-field';
import { newSpecPage } from '@stencil/core/testing';

describe('FormFieldComponent', () => {
	let formField;

	beforeEach(() => {
		formField = new FormFieldComponent();
	});

	it('should build', () => {
		expect(formField).toBeTruthy();
	});

	it('should have a default option equal to inline', () => {
		expect(formField.option).toEqual('inline');
	});

	it('should have a default type equal to input', () => {
		expect(formField.type).toEqual('input');
	});

	it('should render in input mode by default', async() => {
		const page = await newSpecPage({
			components: [FormFieldComponent],
			html: `<se-form-field></se-form-field>`,
		});
		expect(page.root.shadowRoot.querySelector('.input')).toBeTruthy();
	});

	it('should render in select mode when the option is set to select, and the required symbol when required is set to true', async() => {
		const page = await newSpecPage({
			components: [FormFieldComponent],
			html: `<se-form-field type="select" label="Label" required="true"></se-form-field>`,
		});
		expect(page.root.shadowRoot.querySelector('.select')).toBeTruthy();
		expect(page.root.shadowRoot.querySelector('span')).toBeTruthy();
	});

	it('should disable the input field when the form field disabled property is true', () => {
		formField.disabled = true;
		let input = document.createElement('input');
		input.setAttribute('type', 'text');
		formField.el.appendChild(input);
		formField.componentDidLoad();
		expect(input.disabled).toBeTruthy();
	});

	it('should call the handleEvent function 3 times, when a user input changes on the radio, checkbox, or input, element', () => {
		const event = {detail: {selected: true}};
		const eventSpy = jest.spyOn(formField, 'handleEvent');
		formField.inputSelectListenerHandler(event);  // user changes value in input field
		formField.radioListenerHandler(event); // user changes value of se-checkbox
		formField.checkboxListenerHandler(event); // user changes value of se-checkbox
		expect(eventSpy).toHaveBeenCalledTimes(3);
	});

	it('should emit the didSubmit event when the handleEvent function is called', () => {
		const event = {detail: {selected: true}};
		const eventSpy = jest.spyOn(formField.didSubmit, 'emit');
		formField.inputSelectListenerHandler(event); // user changes value in input field
		expect(eventSpy).toHaveBeenCalled();
	});

	it('should not emit the didSubmit event when the form field is disabled', () => {
		const event = {detail: {selected: true}};
		const eventSpy = jest.spyOn(formField.didSubmit, 'emit');
		formField.disabled = true;
		formField.inputSelectListenerHandler(event); // user changes value in input field
		expect(eventSpy).not.toHaveBeenCalled();
	});
});