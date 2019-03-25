import { RadioSwitchComponent } from "./radio-switch";

describe('RadioSwitchComponent', () => {
	let radioSwitch;

	beforeEach(() => {
		radioSwitch = new RadioSwitchComponent();
	});

	it('should build', () => {
		expect(radioSwitch).toBeTruthy();
	});
});