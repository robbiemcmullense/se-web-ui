import { BlockFooter} from "./block-footer";
import { newSpecPage } from '@stencil/core/testing';

describe('blockFooter', () => {
	let blockFooter;

	beforeEach(() => {
		blockFooter = new BlockFooter();
	});

	it('should build', () => {
		expect(blockFooter).toBeTruthy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [BlockFooter],
			html: `<se-block-footer></se-block-footer>`,
		});
		expect(page.root.shadowRoot.querySelector('.se-block-footer')).toBeTruthy();
	});
});