import { DialogHeaderComponent} from "./dialog-header";
import { newSpecPage } from '@stencil/core/testing';

describe('DialogHeaderComponent', () => {
	let dialogHeaderComponent;

	beforeEach(() => {
		dialogHeaderComponent = new DialogHeaderComponent();
	});

	it('should build', () => {
		expect(dialogHeaderComponent).toBeTruthy();
	});

	it('should be primary color by default', () => {
		expect(dialogHeaderComponent.color).toEqual('primary');
	});

	it('should render with the primary class reflecting the default color', async() => {
		const page = await newSpecPage({
			components: [DialogHeaderComponent],
			html: `<se-dialog-header></se-dialog-header>`,
		});
		expect(page.root).toEqualHtml(`
			<se-dialog-header>
				<mock:shadow-root>
					<div class="se-dialog-header primary">
						<div class="flex middle"><slot></slot></div>
						<slot name="end"></slot>
					</div>
				</mock:shadow-root>
			</se-dialog-header>
		`);
	});
});
