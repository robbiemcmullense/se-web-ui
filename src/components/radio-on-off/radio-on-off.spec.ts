import { RadioOnOffComponent } from "./radio-on-off";

describe('RadioOnOffComponent', () => {
	let toggleSwitch;

	beforeEach(() => {
		toggleSwitch = new RadioOnOffComponent();
	});

	it('should build', () => {
		expect(toggleSwitch).toBeTruthy();
	});

	it('should have text set to ON and OFF by default', () => {
		expect(toggleSwitch.textOn).toEqual('ON');
		expect(toggleSwitch.textOff).toEqual('OFF');
	});
});