import { FormFieldComponent } from './form-field';

describe('FormFieldComponent', () => {
	let formField;

	beforeEach(() => {
		formField = new FormFieldComponent();
	});

	it('should build', () => {
		expect(formField).toBeTruthy();
	});

	it('should have a default mode equal to inline', () => {
		expect(formField.mode).toEqual('inline');
	});

	it('should have a default type equal to input', () => {
		expect(formField.type).toEqual('input');
	});

	it('should have a default value equal to Text', () => {
		expect(formField.value).toEqual('Text');
	});
});