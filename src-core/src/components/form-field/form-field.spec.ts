import { FormFieldComponent } from './form-field';

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
});
