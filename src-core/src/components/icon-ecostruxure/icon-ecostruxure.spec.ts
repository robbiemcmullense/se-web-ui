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
		expect(page.root).toEqualHtml(`
			<se-icon-ecostruxure>
				<mock:shadow-root>
					<img class="small" src="[object Object]">
				</mock:shadow-root>
			</se-icon-ecostruxure>
		`);
  });
});