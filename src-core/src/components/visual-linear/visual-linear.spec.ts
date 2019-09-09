import { VisualLinearComponent } from "./visual-linear";
import { newSpecPage } from '@stencil/core/testing';

describe('VisualLinearComponent', () => {
	let linearProgBar;

	beforeEach(() => {
		linearProgBar= new VisualLinearComponent();
	});

	it('should build', () => {
		expect(linearProgBar).toBeTruthy();
	});

	it('should have an inline option by default', () => {
		expect(linearProgBar.option).toEqual('inline');
	});

	it('should render with the specified properties', async() => {
		const page = await newSpecPage({
			components: [VisualLinearComponent],
			html: `<se-visual-linear percentage="30" secolor="red"></se-visual-linear>`,
		});
		expect(page.root).toEqualHtml(`
			<se-visual-linear percentage="30" secolor="red">
				<mock:shadow-root>
					<div class="inline se-visual-linear">
						<svg height="8">
							<rect class="progress-bar-wrapper" width="100%" height="8"></rect>
							<rect class="progress-bar" width="30%" height="8" style="fill: var(--se-red)"></rect>
							Sorry, your browser does not support inline SVG.
						</svg>
						<text>
							<tspan x="100%" class="linear-label"></tspan>
						</text>
					</div>
				</mock:shadow-root>
			</se-visual-linear>
		`);
	});

	it('should render with a tspan element when a value is specified', async() => {
		const page = await newSpecPage({
			components: [VisualLinearComponent],
			html: `<se-visual-linear percentage="30" secolor="red" value="my value"></se-visual-linear>`,
		});
		expect(page.root).toEqualHtml(`
			<se-visual-linear percentage="30" secolor="red" value="my value">
				<mock:shadow-root>
					<div class="inline se-visual-linear">
						<svg height="8">
							<rect class="progress-bar-wrapper" width="100%" height="8"></rect>
							<rect class="progress-bar" width="30%" height="8" style="fill: var(--se-red)"></rect>
							Sorry, your browser does not support inline SVG.
						</svg>
						<text>
							<tspan class="linear-value">my value</tspan>
							<tspan x="100%" class="linear-label"></tspan>
						</text>
					</div>
				</mock:shadow-root>
			</se-visual-linear>
		`);
	});
});