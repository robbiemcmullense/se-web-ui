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

	it('be set to default mode and standard color', () => {
		expect(toggleSwitch.color).toEqual('standard');
		expect(toggleSwitch.mode).toEqual('default');
	});

	it('should not be disabled by default', () => {
		expect(toggleSwitch.disabled).toBeFalsy();
	});
});