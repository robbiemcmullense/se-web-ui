import { DialogFooterComponent} from "./dialog-footer";
import { newSpecPage } from '@stencil/core/testing';

describe('DialogFooter', () => {
	let dialogFooter;

	beforeEach(() => {
		dialogFooter = new DialogFooterComponent();
	});

	it('should build', () => {
		expect(dialogFooter).toBeTruthy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [DialogFooterComponent],
			html: `<se-dialog-footer></se-dialog-footer>`,
		});
		expect(page.root).toEqualHtml(`
			<se-dialog-footer>
				<mock:shadow-root>
					<div class="flex">
						<slot name="start"></slot>
					</div>
					<slot></slot>
				</mock:shadow-root>
			</se-dialog-footer>
		`);
	});
});
