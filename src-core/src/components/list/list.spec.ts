import { ListComponent } from './list';
import { newSpecPage } from '@stencil/core/testing';

describe('list-group', () => {
  let list;

  beforeEach(() => {
    list = new ListComponent();
  });
  
  it('should build', () => {
    expect(list).toBeTruthy();
  });

  it('should be in classic option by default', () => {
    expect(list.option).toEqual('classic');
  });

  it('should be have canCollapse true by default', () => {
    expect(list.canCollapse).toBe(true);
  });

  it('should render', async() => {
		const page = await newSpecPage({
			components: [ListComponent],
			html: `<se-list></se-list>`,
		});
		expect(page.root).toEqualHtml(`
			<se-list>
				<mock:shadow-root>
					<slot></slot>
				</mock:shadow-root>
			</se-list>
		`);
	});
});
