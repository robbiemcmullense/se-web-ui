import { RadioGroupComponent } from './radio-group';

describe('RadioGroupComponent', () => {
	let radioGroup;

	beforeEach(() => {
		radioGroup = new RadioGroupComponent();
	});

	it('should create a Radio Group component', () => {
		expect(radioGroup).toBeTruthy();
	});

	it('should not be disabled by default', () => {
		expect(radioGroup.disabled).toBeFalsy();
	});

	it('should be the standard color by default', () => {
		expect(radioGroup.color).toEqual('standard');
	});
});
