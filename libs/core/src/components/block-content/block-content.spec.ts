import { newSpecPage } from '@stencil/core/testing';
import { BlockContent } from './block-content';

describe('BlockContent', () => {
  
  it('should render with a se-block-content class', async () => {
    const page = await newSpecPage({
      components: [BlockContent],
      html: `<se-block-content></se-block-content>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.se-block-content')
    ).toBeTruthy();
  });

  it('should render with an widget-content class reflecting the specified option', async () => {
    const page = await newSpecPage({
      components: [BlockContent],
      html: `<se-block-content option="widget"></se-block-content>`,
    });
    expect(page.root.shadowRoot.querySelector('.widget-content')).toBeTruthy();
  });
});
