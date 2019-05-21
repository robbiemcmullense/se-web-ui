import { TooltipContentComponent } from './tooltip-content';

describe('TooltipContentComponent', () => {
  let tooltipContent;

  beforeEach(() => {
  tooltipContent = new TooltipContentComponent();
  });

  it('should build', () => {
    expect(tooltipContent).toBeTruthy();
  });

});
