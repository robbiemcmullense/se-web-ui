import { RadioSwitchComponent } from "./radio-switch";

describe('RadioSwitchComponent', () => {
	let radioSwitch;

	beforeEach(() => {
		radioSwitch = new RadioSwitchComponent();
	});

	it('should build', () => {
		expect(radioSwitch).toBeTruthy();
	});

	it('should not be disabled by default', () => {
		expect(radioSwitch.disabed).toBeFalsy();
	});

	it('should have an undefined "value" property by default', () => {
		expect(radioSwitch.value).toBeUndefined();
	});
});