import { TooltipFooterComponent } from './tooltip-footer';
import { newSpecPage } from '@stencil/core/testing';

describe('TooltipFooterComponent', () => {

  it('should render with a flex class', async () => {
    const page = await newSpecPage({
      components: [TooltipFooterComponent],
      html: `<se-tooltip-footer></se-tooltip-footer>`,
    });
    expect(page.root.shadowRoot.querySelector('.flex')).toBeTruthy();
  });
});
