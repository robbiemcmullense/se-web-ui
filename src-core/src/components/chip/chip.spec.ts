import { ChipComponent } from './chip';

describe('ChipComponent', () => {
	let chip;

	beforeEach(() => {
		chip = new ChipComponent();
	});

	it('should create a chip component', () => {
		expect(chip).toBeTruthy();
	});

	it('should have a standard color by default', () => {
		expect(chip.color).toEqual('standard');
	});

	it('should not be selected by default', () => {
		expect(chip.selected).toBeFalsy();
	});

	it('should not be disabled by default', () => {
		expect(chip.disabled).toBeFalsy();
	});

	it('should have an undefined value initially', () => {
		expect(chip.value).toBeUndefined();
	});

	it('should not have the ability to be closed by default', () => {
		expect(chip.canClose).toBeFalsy();
	});
});