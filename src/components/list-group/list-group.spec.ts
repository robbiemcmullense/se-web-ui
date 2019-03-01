import { ListGroupComponent } from './list-group';

describe('list-group', () => {
  let listGroup;

  beforeEach(() => {
    listGroup = new ListGroupComponent();
  });
  
  it('should build', () => {
    expect(listGroup).toBeTruthy();
  });

  it('should have an indentation value of 0 by default', () => {
    expect(listGroup.indentation).toEqual(0);
  });

  it('should have a collapsible property set to false by default', () => {
    expect(listGroup.collapsible).toBeFalsy();
  });

  it('should be in classic mode by default', () => {
    expect(listGroup.mode).toEqual('classic');
  });
});
