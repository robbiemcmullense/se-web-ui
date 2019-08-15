import { LoadingComponent } from './loading';
import { newSpecPage } from '@stencil/core/testing';

describe('list-group', () => {
	let loader;

	beforeEach(() => {
		loader = new LoadingComponent();
	});

	it('should build', () => {
		expect(loader).toBeTruthy();
	});

	it('should not have a defined loading state initially', () => {
		expect(loader.loading).toBeUndefined();
	});

	it('should be set to the standard option by default', () => {
		expect(loader.option).toEqual('standard');
	});

	it('should set the selected state to true after calling the setActive method', () => {
		loader.loading = true;
		expect(loader.loading).toBeDefined();
	});

	it('should render', async() => {
    const page = await newSpecPage({
      components: [LoadingComponent],
      html: `<se-loading></se-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <se-loading>
        <mock:shadow-root>
					<div class="loading-wrapper">
						<div class="se-loading standard">
							<div class="se-icon">spinner</div>
						</div>
					</div>
					<div class="loading-background"></div>
        </mock:shadow-root>
      </se-loading>
    `);
  });
});
