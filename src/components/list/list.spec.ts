import { ListComponent } from './list';

describe('list-group', () => {
  let list;

  beforeEach(() => {
    list = new ListComponent();
  });
  
  it('should build', () => {
    expect(list).toBeTruthy();
  });

  it('should be in classic mode by default', () => {
    expect(list.mode).toEqual('classic');
  });
});
