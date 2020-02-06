import { IconEcostruxureComponent } from './icon-ecostruxure';
import { newSpecPage } from '@stencil/core/testing';

describe('IconEcostruxureComponent', () => {
	let ecostruxureIcon;

	beforeEach(() => {
		ecostruxureIcon = new IconEcostruxureComponent();
	});

	it('should build', () => {
		expect(ecostruxureIcon).toBeTruthy();
	});

	it('should be a small size by default', () => {
    expect(ecostruxureIcon.size).toEqual('small');
	});
	
	it('should render with the small class to reflect the default small size', async() => {
    const page = await newSpecPage({
			components: [IconEcostruxureComponent],
			html: `<se-icon-ecostruxure></se-icon-ecostruxure>`,
		});
		expect(page.root.shadowRoot.querySelector('span.small')).toBeTruthy();
	});
	
	it('should render with the medium class when specified', async() => {
    const page = await newSpecPage({
			components: [IconEcostruxureComponent],
			html: `<se-icon-ecostruxure size="medium"></se-icon-ecostruxure>`,
		});
		expect(page.root.shadowRoot.querySelector('span.medium')).toBeTruthy();
  });
});