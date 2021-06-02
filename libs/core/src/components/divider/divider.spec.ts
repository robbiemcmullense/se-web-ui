import { DividerComponent } from './divider';
import { newSpecPage } from '@stencil/core/testing';

describe('divider', () => {


  it('should render with horizontal and standard classes by default', async () => {
    const page = await newSpecPage({
      components: [DividerComponent],
      html: `<se-divider></se-divider>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.horizontal.standard')
    ).toBeTruthy();
  });
});
