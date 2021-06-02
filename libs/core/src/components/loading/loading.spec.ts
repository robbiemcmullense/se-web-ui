import { LoadingComponent } from './loading';
import { newSpecPage } from '@stencil/core/testing';

describe('list-group', () => {
  

  it('should render, with an standard class to reflect the default option', async () => {
    const page = await newSpecPage({
      components: [LoadingComponent],
      html: `<se-loading></se-loading>`,
    });
    expect(
      page.root.shadowRoot.querySelector('.se-loading.standard')
    ).toBeTruthy();
  });
});
