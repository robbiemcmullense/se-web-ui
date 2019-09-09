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

	it('should render with the specified properties', async() => {
		const page = await newSpecPage({
			components: [VisualRadialComponent],
			html: `<se-visual-radial percentage="30" secolor="red"></se-visual-radial>`,
		});
		expect(page.root).toEqualHtml(`
			<se-visual-radial percentage="30" secolor="red">
				<mock:shadow-root>
					<div class="large visual-radial-wrapper">
						<svg class="se-visual-radial" height="164" width="164">
							<circle cx="82" cy="82" fill="transparent" r="66" stroke="#f7f7f7" stroke-width="8" fill="transparent"></circle>
							<circle cx="82" cy="82" fill="transparent" r="66" stroke="var(--se-red)" stroke-width="8" fill="transparent" style="stroke-dashoffset: 290.2831611916969;"></circle>
							Sorry, your browser does not support inline SVG.
						</svg>
						<svg height="164" width="164">
							<text>
								<tspan class="radial-label" x="50%" y="53%" text-anchor="middle"></tspan>
							</text>
						</svg>
					</div>
				</mock:shadow-root>
			</se-visual-radial>
		`);
	});

	it('should render with a tspan element when a value is specified, and the default #3dcd58 color hex when no color property is specified', async() => {
		const page = await newSpecPage({
			components: [VisualRadialComponent],
			html: `<se-visual-radial percentage="30" value="my value"></se-visual-radial>`,
		});
		expect(page.root).toEqualHtml(`
			<se-visual-radial percentage="30" value="my value">
				<mock:shadow-root>
					<div class="large visual-radial-wrapper">
						<svg class="se-visual-radial" height="164" width="164">
							<circle cx="82" cy="82" fill="transparent" r="66"stroke="#f7f7f7" stroke-width="8" fill="transparent"></circle>
							<circle cx="82" cy="82" fill="transparent" r="66"stroke="#3dcd58" stroke-width="8" fill="transparent" style="stroke-dashoffset: 290.2831611916969;"></circle>
							Sorry, your browser does not support inline SVG.
						</svg>
						<svg height="164" width="164">
							<text>
								<tspan class="radial-value" x="50%" y="50%" text-anchor="middle">my value</tspan>
								<tspan class="radial-label" x="50%" y="70%" text-anchor="middle"></tspan>
							</text>
						</svg>
					</div>
				</mock:shadow-root>
			</se-visual-radial>
		`);
	});
});