import { RadioComponent } from './radio';

describe('RadioComponent', () => {
	let radioButtons;

	beforeEach(() => {
		radioButtons = new RadioComponent();
	});

	it('should create a radioButtons component', () => {
		expect(radioButtons).toBeTruthy();
	});
	
	it('should be in "checkbox" option by default', () => {
		expect(radioButtons.option).toEqual('checkbox');
	});

	it('should not be disabled by default', () => {
		expect(radioButtons.disabled).toBeFalsy();
	});
});