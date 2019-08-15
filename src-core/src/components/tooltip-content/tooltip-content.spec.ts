import { TooltipContentComponent } from './tooltip-content';
import { newSpecPage } from '@stencil/core/testing';

describe('TooltipContentComponent', () => {
  let tooltipContent;

  beforeEach(() => {
  tooltipContent = new TooltipContentComponent();
  });

  it('should build', () => {
    expect(tooltipContent).toBeTruthy();
  });

  it('should render', async() => {
    const page = await newSpecPage({
			components: [TooltipContentComponent],
			html: `<se-tooltip-content></se-tooltip-content>`,
		});
		expect(page.root).toEqualHtml(`
			<se-tooltip-content>
				<mock:shadow-root>
					<div class="tooltip-content">
						<slot></slot>
					</div>
				</mock:shadow-root>
			</se-tooltip-content>
		`);
  });

  it('should render with an se-icon component when an icon property is specified', async() => {
    const page = await newSpecPage({
			components: [TooltipContentComponent],
			html: `<se-tooltip-content icon="my icon"></se-tooltip-content>`,
		});
		expect(page.root).toEqualHtml(`
			<se-tooltip-content icon="my icon">
				<mock:shadow-root>
          <div class="tooltip-content">
            <se-icon class="se-icon" size="small">my icon</se-icon>
						<slot></slot>
					</div>
				</mock:shadow-root>
			</se-tooltip-content>
		`);
  });
});
