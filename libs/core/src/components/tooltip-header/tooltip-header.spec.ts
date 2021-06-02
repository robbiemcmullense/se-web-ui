import { TooltipHeaderComponent } from './tooltip-header';
import { newSpecPage } from '@stencil/core/testing';

describe('TooltipContentComponent', () => {


  it('should render with a tooltip-header class', async () => {
    const page = await newSpecPage({
      components: [TooltipHeaderComponent],
      html: `<se-tooltip-header></se-tooltip-header>`,
    });
    expect(page.root.shadowRoot.querySelector('.start')).toBeTruthy();
  });

  it('should render with an se-icon component when an icon property is specified', async () => {
    const page = await newSpecPage({
      components: [TooltipHeaderComponent],
      html: `<se-tooltip-header icon="my icon"></se-tooltip-header>`,
    });
    expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
  });
});
