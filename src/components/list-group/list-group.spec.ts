import { ListGroupComponent } from './list-group';

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
});
