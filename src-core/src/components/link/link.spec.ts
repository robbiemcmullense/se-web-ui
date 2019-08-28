import { LinkComponent } from "./link";
import { newSpecPage } from '@stencil/core/testing';

describe('LinkComponent', () => {
	let link;

	beforeEach(() => {
		link = new LinkComponent();
	});

	it('should build', () => {
		expect(link).toBeTruthy();
	});

	it('should be internal type by default', () => {
		expect(link.option).toEqual('internal');
	});

	it('should render', async() => {
    const page = await newSpecPage({
			components: [LinkComponent],
			html: `<se-link></se-link>`,
		});
		expect(page.root).toEqualHtml(`
			<se-link>
				<mock:shadow-root>
					<a target=""><slot></slot></a>
				</mock:shadow-root>
			</se-link>
		`);
	});
	
	it('should render with the specified url and the external class when set to the external option', async() => {
    const page = await newSpecPage({
			components: [LinkComponent],
			html: `<se-link option="external" url="google.com"></se-link>`,
		});
		expect(page.root).toEqualHtml(`
			<se-link option="external" url="google.com">
				<mock:shadow-root>
					<a href="google.com" class="external" target="_blank"><slot></slot></a>
				</mock:shadow-root>
			</se-link>
		`);
  });
});