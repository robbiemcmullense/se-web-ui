import { IconLifeisonComponent } from './icon-lifeison';
import { newSpecPage } from '@stencil/core/testing';

describe('IconLifeisonComponent', () => {
	let lifeisonIcon;

	beforeEach(() => {
		lifeisonIcon = new IconLifeisonComponent();
	});

	it('should build', () => {
		expect(lifeisonIcon).toBeTruthy();
	});

	it('should inherit its color from its parent', () => {
		expect(lifeisonIcon.color).toEqual('inherited');
	});

	it('should render with the inherited class to reflect the default color', async() => {
    const page = await newSpecPage({
			components: [IconLifeisonComponent],
			html: `<se-icon-lifeison></se-icon-lifeison>`,
		});
		expect(page.root).toEqualHtml(`
			<se-icon-lifeison>
				<mock:shadow-root>
					<img class="inherited" src="[object Object]">
				</mock:shadow-root>
			</se-icon-lifeison>
		`);
  });
});
