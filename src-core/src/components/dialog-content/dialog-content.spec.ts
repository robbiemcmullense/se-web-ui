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
		expect(page.root.shadowRoot.querySelector('.se-dialog-content')).toBeTruthy();
	});

	it('should render with full-content and an se-icon element when option is set to fill and icon is defined', async() => {
		const page = await newSpecPage({
			components: [DialogContentComponent],
			html: `<se-dialog-content option="fill" icon="my icon"></se-dialog-content>`,
		});
		expect(page.root.shadowRoot.querySelector('.full-content')).toBeTruthy();
		expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
	});
});
