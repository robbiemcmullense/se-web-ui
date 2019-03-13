import { VisualLinearComponent } from "./visual-linear";

describe('VisualLinearComponent', () => {
	let linearProgBar;

	beforeEach(() => {
		linearProgBar= new VisualLinearComponent();
	});

	it('should build', () => {
		expect(linearProgBar).toBeTruthy();
	});

	it('should have an inline mode by default', () => {
		expect(linearProgBar.mode).toEqual('inline');
	});
});