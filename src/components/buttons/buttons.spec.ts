import { ButtonsComponent } from './buttons';

describe('ButtonComponent', () => {
	let buttons;

	beforeEach(() => {
		buttons = new ButtonsComponent();
	});

	it('should create a buttons component', () => {
		expect(buttons).toBeTruthy();
	});
	
	it('should be in "checkbox" option by default', () => {
		expect(buttons.option).toEqual('checkbox');
	});

	it('should not be disabled by default', () => {
		expect(buttons.disabled).toBeFalsy();
	});
});