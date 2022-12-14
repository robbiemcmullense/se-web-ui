import { VisualLinearComponent } from './visual-linear';
import { newSpecPage } from '@stencil/core/testing';

describe('VisualLinearComponent', () => {


  it('should render with an svg element', async () => {
    const page = await newSpecPage({
      components: [VisualLinearComponent],
      html: `<se-visual-linear percentage="30" secolor="red"></se-visual-linear>`,
    });
    expect(page.root.shadowRoot.querySelector('svg')).toBeTruthy();
  });

  it('should render with a tspan element with class linear-value when a value is specified', async () => {
    const page = await newSpecPage({
      components: [VisualLinearComponent],
      html: `<se-visual-linear percentage="30" secolor="red" value="my value"></se-visual-linear>`,
    });
    expect(
      page.root.shadowRoot.querySelector('tspan.linear-value')
    ).toBeTruthy();
  });
});
