import { ButtonComponent } from './button';

describe('ButtonComponent', () => {
	let button;

	beforeEach(() => {
		button = new ButtonComponent();
	});

	it('should create a button component', () => {
		expect(button).toBeTruthy();
	});

	it('should have a "flat" option by default', () => {
		expect(button.option).toEqual('flat');
	});

	it('should not have a defined selected state initially', () => {
		expect(button.selected).toBeUndefined();
	});

	it('should set the grouped property to true after calling the setGrouped method', () => {
    button.setGrouped(true);
		expect(button.grouped).toBeTruthy();
	});

	it('should not be disabled by default', () => {
		expect(button.disabled).toBeFalsy();
	});

	it('should set the disabled property to true after calling the setDisabled method', () => {
    button.setDisabled(true);
		expect(button.disabled).toBeTruthy();
	});
});
