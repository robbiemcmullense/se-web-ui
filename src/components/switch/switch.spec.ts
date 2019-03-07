import { SwitchComponent } from "./switch";

describe('SwitchComponent', () => {
	let toggleSwitch;

	beforeEach(() => {
		toggleSwitch = new SwitchComponent();
	});

	it('should build', () => {
		expect(toggleSwitch).toBeTruthy();
	});
});