import { BlockHeader} from "./block-header";
import { newSpecPage } from '@stencil/core/testing';

describe('blockHeader', () => {
	let blockHeader;

	beforeEach(() => {
		blockHeader = new BlockHeader();
	});

	it('should build', () => {
		expect(blockHeader).toBeTruthy();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [BlockHeader],
			html: `<se-block-header></se-block-header>`,
		});
		expect(page.root.shadowRoot.querySelector('.se-block-header')).toBeTruthy();
	});
});