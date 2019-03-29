import { ListComponent } from './list';

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
});
