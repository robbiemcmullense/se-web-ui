import { CheckboxComponent } from './checkbox';

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

	it('should be checked when selected is set to true', () => {
		checkbox.selected = true;
		checkbox.componentDidLoad();
		expect(checkbox.checked).toBeTruthy();
	});
});