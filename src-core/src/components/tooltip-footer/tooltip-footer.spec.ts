import { TooltipFooterComponent } from './tooltip-footer';
import { newSpecPage } from '@stencil/core/testing';

describe('TooltipFooterComponent', () => {
  let tooltipFooter;

  beforeEach(() => {
  tooltipFooter = new TooltipFooterComponent();
  });

  it('should build', () => {
    expect(tooltipFooter).toBeTruthy();
  });

  it('should render', async() => {
    const page = await newSpecPage({
			components: [TooltipFooterComponent],
			html: `<se-tooltip-footer></se-tooltip-footer>`,
		});
		expect(page.root).toEqualHtml(`
			<se-tooltip-footer>
				<mock:shadow-root>
					<div class="flex">
						<slot name="start"></slot>
          </div>
          <slot></slot>
				</mock:shadow-root>
			</se-tooltip-footer>
		`);
  });
});
