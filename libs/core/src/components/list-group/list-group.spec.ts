import { ListGroupComponent } from './list-group';
import { newSpecPage } from '@stencil/core/testing';

describe('list-group', () => {
  let listGroup;

  beforeEach(() => {
    listGroup = new ListGroupComponent();
  });

  it('should build', () => {
    expect(listGroup).toBeTruthy();
  });

  it('should have no indentation by default', () => {
    expect(listGroup.indentation).toEqual(0);
  });

  it('should have a collapsible property set to false by default', () => {
    expect(listGroup.collapsed).toBeFalsy();
  });

  it('should be have canCollapse true by default', () => {
    expect(listGroup.canCollapse).toBe(true);
  });

  it('should render in classic mode, with a se-icon element by default', async() => {
		const page = await newSpecPage({
			components: [ListGroupComponent],
			html: `<se-list-group></se-list-group>`,
		});
		expect(page.root.shadowRoot.querySelector('se-icon')).toBeTruthy();
  });

  it('should render the button with attribute "disabled" true when canCollapse is false', async() => {
		const page = await newSpecPage({
			components: [ListGroupComponent],
			html: `<se-list-group can-collapse="false"></se-list-group>`,
		});
		expect(page.root.shadowRoot.querySelector('button').getAttribute('disabled')).toBe('');
  });

  it('should render the button without an arrow when canCollapse is false', async() => {
		const page = await newSpecPage({
			components: [ListGroupComponent],
			html: `<se-list-group can-collapse="false"></se-list-group>`,
		});
		expect(page.root.shadowRoot.querySelector('se-icon')).toBe(null);
  });


  it('should call the setButtonId function when the component loads', async() => {
		const eventSpy = jest.spyOn(listGroup, 'setButtonId');
		listGroup.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
  });

  it('should call the checkSelected function twice, when the collapsed property changes or a child becomes selected', async() => {
		const eventSpy = jest.spyOn(listGroup, 'checkSelected');
    listGroup.collapsedChanged(); // list group is collapsed
    listGroup.ChildUpdated(); // child list item becomes selected/deselected
		expect(eventSpy).toHaveBeenCalledTimes(2);
  });

  it('should emit the didGroupClick event when the toggleCollapse method is called', () => {
    listGroup.option = 'classic';
    const eventSpy = jest.spyOn(listGroup.didGroupClick, 'emit');
    listGroup.toggleCollapse(); // list group button is clicked
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit the didGroupClick event when the toggleCollapse method is called in treeview option and the target is the icon', () => {
    listGroup.option = 'treeview';
    const event = {target: {nodeName: 'SE-ICON'}};
    const eventSpy = jest.spyOn(listGroup.didGroupClick, 'emit');
    listGroup.toggleCollapse(event); // list group button is clicked
    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('should inherit the headline option from its parent when specified', () => {
    let parentListElm = document.createElement('se-list');
    parentListElm.option = 'headline';
    parentListElm.appendChild(listGroup.el);
    listGroup.componentWillLoad();
    expect(listGroup.option).toEqual('headline');
  });

  it('should set an indentation of 2 when its parent element has an indentation of 1', () => {
    let parentListElm = document.createElement('se-list-group');
    parentListElm.indentation = 1;
    parentListElm.appendChild(listGroup.el);
    listGroup.componentWillLoad();
    expect(listGroup.indentation).toEqual(2);
  });
});
