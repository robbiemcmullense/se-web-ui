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

  it('should be in classic option by default', () => {
    expect(listGroup.option).toEqual('classic');
  });

  it('should be have canCollapse true by default', () => {
    expect(listGroup.canCollapse).toBe(true);
  });

  it('should render in classic mode with an up arrow by default', async() => {
		const page = await newSpecPage({
			components: [ListGroupComponent],
			html: `<se-list-group></se-list-group>`,
		});
		expect(page.root).toEqualHtml(`
			<se-list-group>
				<mock:shadow-root>
				  <div class="classic se-list-group">
            <button style="padding-left: 0px">
              <div class="nav-content">
                <div></div>
                <small></small>
              </div>
              <se-icon size="medium">arrow2_up</se-icon>
            </button>
            <div class="group-item">
              <slot/>
            </div>
          </div>
				</mock:shadow-root>
			</se-list-group>
		`);
  });

  it('should render a div element with the selectedBar class when selected is true and option is set to nav', async() => {
		const page = await newSpecPage({
			components: [ListGroupComponent],
			html: `<se-list-group option="nav" selected="true"></se-list-group>`,
		});
		expect(page.root).toEqualHtml(`
			<se-list-group option="nav" selected="true">
				<mock:shadow-root>
				  <div class="nav se-list-group">
            <button class="selected" style="padding-left: 0px">
              <div class="selectedBar"></div>
              <div class="nav-content">
                <div></div>
                <small></small>
              </div>
              <se-icon size="medium">arrow2_up</se-icon>
            </button>
            <div class="group-item">
              <slot/>
            </div>
          </div>
				</mock:shadow-root>
			</se-list-group>
		`);
  });
  
  it('should call the setButtonId function when the component loads', async() => {
		const eventSpy = jest.spyOn(listGroup, 'setButtonId');
		listGroup.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
  });
  
  it('should call the checkSelected function twice, when the collapsed property changes or a child becomes selected', async() => {
		const eventSpy = jest.spyOn(listGroup, 'checkSelected');
    listGroup.collapsedChanged();
    listGroup.ChildUpdated();
		expect(eventSpy).toHaveBeenCalledTimes(2);
  });
  
  it('should emit the didGroupClick event when the toggleCollapse method is called', () => {
    const eventSpy = jest.spyOn(listGroup.didGroupClick, 'emit');
    listGroup.toggleCollapse();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit the didGroupClick event when the toggleCollapse method is called in treeview option and is the treeview target', () => {
    listGroup.option = 'treeview';
    const event = {target: {nodeName: 'SE-ICON'}};
    const eventSpy = jest.spyOn(listGroup.didGroupClick, 'emit');
    listGroup.toggleCollapse(event);
    expect(eventSpy).not.toHaveBeenCalled();
  });
});