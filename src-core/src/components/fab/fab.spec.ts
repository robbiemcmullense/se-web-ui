import { FabComponent } from './fab';

describe('FabComponent', () => {
  let fab;

  beforeEach(() => {
    fab = new FabComponent();
  });
  it('should build', () => {
    expect(fab).toBeTruthy();
  });
  it('should be in bottom position by default', () => {
    expect(fab.position).toEqual('bottom');
  });

  it('should be  speed dial by default', () => {
    expect(fab.option).toEqual('speeddial');
  });
  it('should be a primary color by default', () => {
    expect(fab.color).toEqual('primary');
  });
});
