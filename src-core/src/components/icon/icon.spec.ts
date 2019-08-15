import { IconComponent } from './icon';
import { newSpecPage } from '@stencil/core/testing';

describe('se-icon', () => {
  let icon;

  beforeEach(() => {
    icon = new IconComponent();
  });

  it('should build', () => {  
    expect(icon).toBeTruthy();
  });

  it('should be a small size by default', () => {
    expect(icon.size).toEqual('small');
  });

  it('should render with the icon-small class to reflect the default small size', async() => {
    const page = await newSpecPage({
			components: [IconComponent],
			html: `<se-icon></se-icon>`,
		});
		expect(page.root).toEqualHtml(`
			<se-icon>
				<mock:shadow-root>
          <div class="icon-small icon-undefined se-icon-wrapper">
            <slot></slot>
          </div>
				</mock:shadow-root>
			</se-icon>
		`);
  });
});
