import { TooltipHeaderComponent } from './tooltip-header';
import { newSpecPage } from '@stencil/core/testing';

describe('TooltipContentComponent', () => {
  let tooltipHeader;

  beforeEach(() => {
  tooltipHeader = new TooltipHeaderComponent();
  });

  it('should build', () => {
    expect(tooltipHeader).toBeTruthy();
  });

  it('should render', async() => {
    const page = await newSpecPage({
			components: [TooltipHeaderComponent],
			html: `<se-tooltip-header></se-tooltip-header>`,
		});
		expect(page.root).toEqualHtml(`
			<se-tooltip-header>
				<mock:shadow-root>
					<div class="tooltip-header">
						<slot></slot>
          </div>
          <slot name="end"></slot>
				</mock:shadow-root>
			</se-tooltip-header>
		`);
  });

  it('should render with an se-icon component when an icon property is specified', async() => {
    const page = await newSpecPage({
			components: [TooltipHeaderComponent],
			html: `<se-tooltip-header icon="my icon"></se-tooltip-header>`,
		});
		expect(page.root).toEqualHtml(`
			<se-tooltip-header icon="my icon">
				<mock:shadow-root>
          <div class="tooltip-header">
            <se-icon class="se-icon" size="small">my icon</se-icon>
						<slot></slot>
          </div>
          <slot name="end"></slot>
				</mock:shadow-root>
			</se-tooltip-header>
		`);
  });

});
