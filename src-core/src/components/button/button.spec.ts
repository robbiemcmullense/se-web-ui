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

	it('should have a small size by default', () => {
		expect(button.size).toEqual('small');
	});

	it('should have a "standard" color property by default', () => {
		expect(button.color).toEqual('standard');
	});

	it('should have a "button" type property by default', () => {
		expect(button.type).toEqual('button');
	});

	it('should not have a defined selected state initially', () => {
		expect(button.selected).toBeUndefined();
	});

	it('should not be disabled by default', () => {
		expect(button.disabled).toBeFalsy();
	});

	it('should set the disabled property to true after calling the setDisabled method', () => {
    button.setDisabled(true);
		expect(button.disabled).toBeTruthy();
	});

	it('should set the grouped property to true after calling the setGrouped method', () => {
    button.setGrouped(true);
		expect(button.grouped).toBeTruthy();
	});

	it('should have a primary color when set to the "login" option', () => {
		button.option = 'login';
		button.optionDidChange();
		expect(button.color).toEqual('primary');
	});

	it('should have a secondary color when set to the "signup" option', () => {
		button.option = 'signup';
		button.optionDidChange();
		expect(button.color).toEqual('secondary');
	});
});
