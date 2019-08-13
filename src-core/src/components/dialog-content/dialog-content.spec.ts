import { DialogContentComponent} from "./dialog-content";
import { newSpecPage } from '@stencil/core/testing';

describe('DialogContentComponent', () => {
	let dialogContentComponent;

	beforeEach(() => {
		dialogContentComponent = new DialogContentComponent();
	});

	it('should build', () => {
		expect(dialogContentComponent).toBeTruthy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [DialogContentComponent],
			html: `<se-dialog-content></se-dialog-content>`,
		});
		expect(page.root).toEqualHtml(`
			<se-dialog-content>
				<mock:shadow-root>
					<div class="se-dialog-content">
						<div class="inner-content"><slot></slot></div>
					</div>
				</mock:shadow-root>
			</se-dialog-content>
		`);
	});

	it('should render with full-content and an se-icon element when option is set to fill and icon is defined', async() => {
		const page = await newSpecPage({
			components: [DialogContentComponent],
			html: `<se-dialog-content option="fill" icon="my icon"></se-dialog-content>`,
		});
		expect(page.root).toEqualHtml(`
			<se-dialog-content option="fill" icon="my icon">
				<mock:shadow-root>
					<div class="se-dialog-content full-content">
						<se-icon size="large">my icon</se-icon>
						<div class="inner-content"><slot></slot></div>
					</div>
				</mock:shadow-root>
			</se-dialog-content>
		`);
	});
});
