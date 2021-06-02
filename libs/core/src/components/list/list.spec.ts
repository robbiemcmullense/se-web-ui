import { ListComponent } from './list';
import { newSpecPage } from '@stencil/core/testing';

describe('list-group', () => {


  it('should render, with a slot element', async () => {
    const page = await newSpecPage({
      components: [ListComponent],
      html: `<se-list></se-list>`,
    });
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });
});
