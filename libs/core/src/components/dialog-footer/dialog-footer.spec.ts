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

	it('should render with a flex class', async() => {
		const page = await newSpecPage({
			components: [DialogFooterComponent],
			html: `<se-dialog-footer></se-dialog-footer>`,
		});
		expect(page.root.shadowRoot.querySelector('div.flex')).toBeTruthy();
	});
});
