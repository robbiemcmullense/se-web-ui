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

  it('should set the padding to 40 with an indentation of 2', () => {
    listItem.indentation = 2;
    listItem.componentDidLoad();
    expect(listItem.padding).toEqual(40);
  });

  it('should render', async() => {
		const page = await newSpecPage({
			components: [ListItemComponent],
			html: `<se-list-item></se-list-item>`,
		});
		expect(page.root).toEqualHtml(`
      <se-list-item>
        <mock:shadow-root>
          <div class="classic se-list-item">
            <button style="padding-left: 0px">
              <div class="nav-content">
                <div></div>
                <small></small>
              </div>
              <slot></slot>
            </button>
          </div>
        </mock:shadow-root>
			</se-list-item>
		`);
  });
  
  it('should call the setButtonId function when the component loads', async() => {
		const eventSpy = jest.spyOn(listItem, 'setButtonId');
		listItem.componentDidLoad();
		expect(eventSpy).toHaveBeenCalled();
  });
});