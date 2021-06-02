import { BlockFooter } from './block-footer';
import { newSpecPage } from '@stencil/core/testing';

describe('blockFooter', () => {
  
  it('should render with a se-block-footer class', async () => {
    const page = await newSpecPage({
      components: [BlockFooter],
      html: `<se-block-footer></se-block-footer>`,
    });
    expect(page.root.shadowRoot.querySelector('.se-block-footer')).toBeTruthy();
  });

  it('should render with a se-divider element when the divider property is set to true', async () => {
    const page = await newSpecPage({
      components: [BlockFooter],
      html: `<se-block-footer divider="true"></se-block-footer>`,
    });
    expect(page.root.shadowRoot.querySelector('se-divider')).toBeTruthy();
  });
});
