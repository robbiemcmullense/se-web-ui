import { TooltipComponent } from './tooltip';
import { newSpecPage } from '@stencil/core/testing';

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

  // it('should set opened to true when calling the open method', () => {
  //   tooltip.open();
  //   expect(tooltip.opened).toBeTruthy();
  // });

  // it('should set opened to false when calling the close method', () => {
  //   tooltip.opened = true;
  //   tooltip.close();
  //   expect(tooltip.opened).toBeFalsy();
  // });

  it('should render, with a tooltip class', async () => {
    const page = await newSpecPage({
      components: [TooltipComponent],
      html: `<se-tooltip></se-tooltip>`,
    });
    expect(page.root.shadowRoot.querySelector('.tooltip')).toBeTruthy();
  });

  // it('should call the close method when the closeTooltips event is emitted', () => {
  //   eventSpy = jest.spyOn(tooltip, 'close');
  //   tooltip.handleCloseTooltip(); // user opens a tooltip while another tooltip is open
  //   expect(eventSpy).toHaveBeenCalled();
  // });

  // it('should emit the didOpen events when opening a tooltip', () => {
  //   const openSpy = jest.spyOn(tooltip.didOpen, 'emit');
  //   tooltip._toggle(mockEvent);
  //   expect(openSpy).toHaveBeenCalled();
  // });

  // it('should emit the didClose events when closing a tooltip', () => {
  //   const closeSpy = jest.spyOn(tooltip.didClose, 'emit');
  //   tooltip.opened = true;
  //   tooltip.close();
  //   jest.clearAllTimers();
  //   expect(closeSpy).toHaveBeenCalled();
  // });
});
