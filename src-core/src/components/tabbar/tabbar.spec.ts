import { TabbarComponent } from "./tabbar";
import { newSpecPage } from '@stencil/core/testing';

describe('TabbarComponent', () => {
	let tabBar;

	beforeEach(() => {
		tabBar = new TabbarComponent();
	});

	it('should build', () => {
		expect(tabBar).toBeTruthy();
	});

	it('should have a primary color by default', () => {
		expect(tabBar.color).toEqual('primary');
	});

	it('should render with primary and fill classes by default', async() => {
    const page = await newSpecPage({
      components: [TabbarComponent],
      html: `<se-tabbar></se-tabbar>`,
    });
    expect(page.root).toEqualHtml(`
      <se-tabbar>
				<div class="tab-primary">
					<div class="d-flex-main opt-fill">
						<div class="nav-left-wrapper centered shadowed"></div>
						<div class="fill-space nav-center-wrapper shadowed"></div>
						<div class="centered shadowed"></div>
					</div>
				</div>
      </se-tabbar>
    `);
  });
});