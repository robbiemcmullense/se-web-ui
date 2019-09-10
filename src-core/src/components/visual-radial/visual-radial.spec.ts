import { VisualRadialComponent } from "./visual-radial";

describe('VisualRadialComponent', () => {
	let radialProgBar;

	beforeEach(() => {
		radialProgBar = new VisualRadialComponent();
	});

	it('should build', () => {
		expect(radialProgBar).toBeTruthy();
	});

	it('should have a large size by default', () => {
		expect(radialProgBar.size).toEqual('large');
	});

	it('should set the state to 66 times pi when percentage is 50 for a large size', () => {
		radialProgBar.percentage = 50;
		radialProgBar.componentDidLoad();
		expect(radialProgBar.offset).toEqual(66 * Math.PI);
	});

	it('should set the state to 33 times pi when percentage is 50 for a large size', () => {
		radialProgBar.size = 'small';
		radialProgBar.percentage = 50;
		radialProgBar.componentDidLoad();
		expect(radialProgBar.offset).toEqual(33 * Math.PI);
	});
});