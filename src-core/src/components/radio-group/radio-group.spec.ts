import { RadioGroupComponent } from './radio-group';

describe('RadioGroupComponent', () => {
	let radioGroup;

	beforeEach(() => {
		radioGroup = new RadioGroupComponent();
	});

	it('should create a Radio Group component', () => {
		expect(radioGroup).toBeTruthy();
	});
	
	it('should be in "checkbox" option by default', () => {
		expect(radioGroup.option).toEqual('checkbox');
	});

	it('should not be disabled by default', () => {
		expect(radioGroup.disabled).toBeFalsy();
	});
});