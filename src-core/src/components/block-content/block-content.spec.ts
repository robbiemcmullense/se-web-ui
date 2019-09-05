import { BlockContent} from "./block-content";
import { newSpecPage } from "@stencil/core/testing"; 

describe('BlockContent', () => {
	let blockContent;

	beforeEach(() => {
		blockContent = new BlockContent();
	});

	it('should build', () => {
		expect(blockContent).toBeTruthy();
	});

	it('should not have a defined option by default', () => {
		expect(blockContent.option).toBeUndefined();
	});

	it('should render', async() => {
		const page = await newSpecPage({
			components: [BlockContent],
			html: `<se-block-content></se-block-content>`,
		});
		expect(page.root).toEqualHtml(`
			<se-block-content>
				<mock:shadow-root>
					<div class="se-block-content">
						<slot></slot>
      		</div>
				</mock:shadow-root>
			</se-block-content>
		`);
	});

	it('should render with an option-content class reflecting the specified option', async() => {
		const page = await newSpecPage({
			components: [BlockContent],
			html: `<se-block-content option="widget"></se-block-content>`,
		});
		expect(page.root.shadowRoot.querySelector('.se-block-content')).toBeTruthy();
	});
});