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

  it('should render, with a slot element', async() => {
		const page = await newSpecPage({
			components: [ListComponent],
			html: `<se-list></se-list>`,
		});
		expect(page.root.shadowRoot.querySelector('slot')).toBeTruthy();
  });
  
  it('should pass its option property to se-list-group child elements', () => {
    list.option = 'dropdown';
    let listGroup = document.createElement('se-list-group');
    let listItem = document.createElement('se-list-item');
    listGroup.appendChild(listItem);
    list.el.appendChild(listGroup);
    list.componentWillLoad();
    expect(listGroup.option).toEqual('dropdown');
    expect(listItem.option).toEqual('dropdown');
  });
});
