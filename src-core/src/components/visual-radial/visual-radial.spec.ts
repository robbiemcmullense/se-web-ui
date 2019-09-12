import { VisualRadialComponent } from "./visual-radial";
import { newSpecPage } from '@stencil/core/testing';

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

	it('should render with 2 svg elements', async() => {
		const page = await newSpecPage({
			components: [VisualRadialComponent],
			html: `<se-visual-radial percentage="30" secolor="red"></se-visual-radial>`,
		});
		expect(page.root.shadowRoot.querySelectorAll('svg').length).toEqual(2);
	});

	it('should render with a tspan element with the class radial-value when a value is specified', async() => {
		const page = await newSpecPage({
			components: [VisualRadialComponent],
			html: `<se-visual-radial percentage="30" value="my value"></se-visual-radial>`,
		});
		expect(page.root.shadowRoot.querySelector('tspan.radial-value')).toBeTruthy();
	});
});