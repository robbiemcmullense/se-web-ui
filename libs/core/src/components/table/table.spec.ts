import { TableComponent } from './table';
import { newSpecPage } from '@stencil/core/testing';

describe('table-group', () => {

  it('should render, with a slot element', async () => {
    const page = await newSpecPage({
      components: [TableComponent],
      html: `<se-table></se-table>`,
    });
    expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });
});
