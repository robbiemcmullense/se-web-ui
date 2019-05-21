import { TooltipHeaderComponent } from './tooltip-header';

describe('TooltipContentComponent', () => {
  let tooltipHeader;

  beforeEach(() => {
  tooltipHeader = new TooltipHeaderComponent();
  });

  it('should build', () => {
    expect(tooltipHeader).toBeTruthy();
  });

});
