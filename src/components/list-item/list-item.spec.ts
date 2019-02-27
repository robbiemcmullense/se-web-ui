import { ListItemComponent } from './list-item';

describe('list-item', () => {
  let listItem;

  beforeEach(() => {
    listItem = new ListItemComponent();
  });

  it('should build', () => {
    expect(listItem).toBeTruthy();
  });

  it('should have an indentation value of 0 by default', () => {
    expect(listItem.indentation).toEqual(0);
  });

  it('should have a collapsible property set to false by default', () => {
    expect(listItem.collapsible).toBeFalsy();
  });

  it('should be in classic mode by default', () => {
    expect(listItem.mode).toEqual('classic');
  });
});