import { TableComponent } from './table';
import { newSpecPage } from '@stencil/core/testing';

describe('table-group', () => {
  let table;

  beforeEach(() => {
    table = new TableComponent();
  });

  it('should build', () => {
    expect(table).toBeTruthy();
  });

  it('should render, with a slot element', async() => {
		const page = await newSpecPage({
			components: [TableComponent],
			html: `<se-table></se-table>`,
		});
		expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });
});
