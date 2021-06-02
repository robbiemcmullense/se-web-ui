import { TooltipContentComponent } from './tooltip-content';
import { newSpecPage } from '@stencil/core/testing';

describe('TooltipContentComponent', () => {


  it('should render with a slots class', async () => {
    const page = await newSpecPage({
      components: [TooltipContentComponent],
      html: `<se-tooltip-content></se-tooltip-content>`,
    });
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });

  it('should render with an se-icon component when an icon property is specified', async () => {
    const page = await newSpecPage({
      components: [TooltipContentComponent],
      html: `<se-tooltip-content icon="my icon"></se-tooltip-content>`,
    });
    expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
  });
});
