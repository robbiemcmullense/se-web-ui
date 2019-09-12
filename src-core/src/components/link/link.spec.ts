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

	it('should render with an anchor element', async() => {
    const page = await newSpecPage({
			components: [LinkComponent],
			html: `<se-link></se-link>`,
		});
		expect(page.root.shadowRoot.querySelector('a')).toBeTruthy();
	});
	
	it('should render with the specified url and the external class when set to the external option', async() => {
    const page = await newSpecPage({
			components: [LinkComponent],
			html: `<se-link option="external" url="google.com"></se-link>`,
		});
		expect(page.root.shadowRoot.querySelector('.external')).toBeTruthy();
		expect(page.root.shadowRoot.querySelector('a').getAttribute('href')).toEqual('google.com');
  });
});