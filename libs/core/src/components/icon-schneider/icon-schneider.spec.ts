import { IconSchneiderComponent } from './icon-schneider';
import { newSpecPage } from '@stencil/core/testing';

describe('IconSchneiderComponent', () => {
	let schneiderIcon;

	beforeEach(() => {
		schneiderIcon = new IconSchneiderComponent();
	});

	it('should build', () => {
		expect(schneiderIcon).toBeTruthy();
	});

	it('should render', async() => {
    const page = await newSpecPage({
			components: [IconSchneiderComponent],
			html: `<se-icon-schneider></se-icon-schneider>`,
		});
		expect(page.root.shadowRoot.querySelector('span')).toBeTruthy();
  });
});