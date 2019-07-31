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

  it('should be toggleable by default', () => {
    expect(fab.toggleIcon).toBeTruthy();
  });

  it('should change the toggle icon property when the toggle action method is called', () => {
    fab.toggleAction();
    expect(fab.toggleIcon).toBeFalsy();
  });
});
