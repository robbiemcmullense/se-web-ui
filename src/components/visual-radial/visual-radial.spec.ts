import { VisualRadialComponent } from "./visual-radial";

describe('VisualRadialComponent', () => {
	let radialProgBar;

	beforeEach(() => {
		radialProgBar= new VisualRadialComponent();
	});

	it('should build', () => {
		expect(radialProgBar).toBeTruthy();
	});

	it('should set the state to 66 times pi when percentage is 50', () => {
    radialProgBar.percentage = 50;
    radialProgBar.componentDidLoad();
    expect(radialProgBar.offset).toEqual(66 * Math.PI);
	});
});