import { TooltipComponent } from './tooltip';

describe('TooltipComponent', () => {
  let tooltip;

  beforeEach(() => {
  tooltip = new TooltipComponent();
  });

  it('should build', () => {
    expect(tooltip).toBeTruthy();
  });

  it('should be bottom aligned by default', () => {
    expect(tooltip.position).toEqual('bottom');
  });

  it('should not be open when loaded', () => {
    expect(tooltip.opened).toBeFalsy();
  });

  it('should set opened to true when calling the open method', () => {
    tooltip.open();
    expect(tooltip.opened).toBeTruthy();
  });
});
