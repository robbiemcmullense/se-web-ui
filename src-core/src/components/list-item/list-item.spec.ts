import { ListItemComponent } from './list-item';

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

  it('should set the padding to 24 with an indentation of 0 and the option set to treeview', () => {
    listItem.option = 'treeview';
    listItem.componentDidLoad();
    expect(listItem.padding).toEqual(24);
  });
});
