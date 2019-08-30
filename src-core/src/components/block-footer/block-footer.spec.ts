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
		expect(page.root).toEqualHtml(`
			<se-block-footer>
				<mock:shadow-root>
					<div class="se-block-footer row">
						<div class="flex"><slot name="start"></slot></div>
						<slot></slot>
      		</div>
				</mock:shadow-root>
			</se-block-footer>
		`);
	});
});