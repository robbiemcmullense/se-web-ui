import { CheckboxComponent } from './checkbox';

describe('CheckboxComponent', () => {
	let checkbox;

	beforeEach(() => {
		checkbox = new CheckboxComponent();
	});

	it('should create a checkbox component', () => {
		expect(checkbox).toBeTruthy();
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
});