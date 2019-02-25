import { ChipComponent } from './chip';

describe('ChipComponent', () => {
	let chip;

	beforeEach(() => {
		chip = new ChipComponent();
	});

	it('should create a chip component', () => {
		expect(chip).toBeTruthy();
	});

	it('should have an undefined value initially', () => {
		expect(chip.value).toBeUndefined();
	});

	it('should have the ability to be closed by default', () => {
		expect(chip.canClose).toBeTruthy();
	});
});