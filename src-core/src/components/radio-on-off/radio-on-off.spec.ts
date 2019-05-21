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

	it('be set to default option and standard color', () => {
		expect(toggleSwitch.color).toEqual('standard');
		expect(toggleSwitch.option).toEqual('default');
	});

	it('should not be disabled by default', () => {
		expect(toggleSwitch.disabled).toBeFalsy();
	});

	it('should set selected to true when value is set to true', () => {
		toggleSwitch.value = true;
		toggleSwitch.componentDidLoad();
		expect(toggleSwitch.selected).toBeTruthy();
	});
});