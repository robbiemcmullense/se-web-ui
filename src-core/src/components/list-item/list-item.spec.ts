import { ListItemComponent } from './list-item';
import { newSpecPage } from '@stencil/core/testing';

describe('list-item', () => {
  let listItem;

  beforeEach(() => {
    listItem = new ListItemComponent();
  });

  it('should build', () => {
    expect(listItem).toBeTruthy();
  });

  it('should have a collapsible property set to false by default', () => {
    expect(listItem.collapsible).toBeFalsy();
  });

  it('should be in classic option by default', () => {
    expect(listItem.option).toEqual('classic');
  });

  it('should render, with a classic class to reflect the default option', async() => {
		const page = await newSpecPage({
			components: [ListItemComponent],
			html: `<se-list-item></se-list-item>`,
		});
		expect(page.root.shadowRoot.querySelector('.se-list-item.classic')).toBeTruthy();
  });

  it('should inherit the nav option from its parent when specified', () => {
    let parentListElm = document.createElement('se-list');
    parentListElm.option = 'nav';
    parentListElm.appendChild(listItem.el);
    listItem.componentWillLoad();
    expect(listItem.option).toEqual('nav');
  });

  it('should set an indentation of 2 when its parent element has an indentation of 1', () => {
    let parentListElm = document.createElement('se-list-group');
    parentListElm.indentation = 1;
    parentListElm.appendChild(listItem.el);
    listItem.componentWillLoad();
    expect(listItem.indentation).toEqual(2);
  });
  
  it('should call the setButtonId function when the component loads', async() => {
		const eventSpy = jest.spyOn(listItem, 'setButtonId');
		listItem.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
  });

  it('should emit the didSelectedChange event when the selected property changes', () => {
    const eventSpy = jest.spyOn(listItem.didSelectedChange, 'emit');
    listItem.SelectedDidChange(); // list item element is selected/deselected
    expect(eventSpy).toHaveBeenCalled();
  });
});