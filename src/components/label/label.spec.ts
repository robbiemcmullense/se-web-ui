import { LabelComponent } from "./label";

describe('LabelComponent', () => {
	let label;

	beforeEach(() => {
		label = new LabelComponent();
	});

	it('should build', () => {
		expect(label).toBeTruthy();
	});
});