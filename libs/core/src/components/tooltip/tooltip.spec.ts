import { TooltipComponent } from './tooltip';
import { newSpecPage } from '@stencil/core/testing';

describe('TooltipComponent', () => {
  let tooltip, mockEvent, eventSpy;

  beforeEach(() => {
    tooltip = new TooltipComponent();
    mockEvent = {stopPropagation: jest.fn()};
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

  it('should set opened to false when calling the close method', () => {
    tooltip.opened = true;
    tooltip.close();
    expect(tooltip.opened).toBeFalsy();
  });

  it('should render, with a tooltip class', async() => {
    const page = await newSpecPage({
      components: [TooltipComponent],
      html: `<se-tooltip></se-tooltip>`,
    });
    expect(page.root.shadowRoot.querySelector('.tooltip')).toBeTruthy();
  });

  it('should render, with a tooltip-top class to reflect the position property set to top', async() => {
    const page = await newSpecPage({
      components: [TooltipComponent],
      html: `<se-tooltip position="top"></se-tooltip>`,
    });
    expect(page.root.shadowRoot.querySelector('.tooltip-top')).toBeTruthy();
  });

  it('should call the close method when the closeTooltips event is emitted', () => {
    eventSpy = jest.spyOn(tooltip, 'close');
    tooltip.handleCloseTooltip(); // user opens a tooltip while another tooltip is open
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should call the _toggle method twice, when the touchstart and touchend events occur', () => {
    eventSpy = jest.spyOn(tooltip, '_toggle');
    tooltip.handleTouchstart(mockEvent);
    tooltip.handleTouchEnd(mockEvent);
    expect(eventSpy).toHaveBeenCalledTimes(2);
  });

  it('should call the _toggle method twice, when the mouseover and mouseleave hover events occur', () => {
    eventSpy = jest.spyOn(tooltip, '_toggle');
    tooltip.action = 'hover';
    tooltip.handleMouseEnter(mockEvent);
    tooltip.handleMouseLeave(mockEvent);
    expect(eventSpy).toHaveBeenCalledTimes(2);
  });

  it('should call the _toggle method on a click with the tooltip open', () => {
    eventSpy = jest.spyOn(tooltip, '_toggle');
    tooltip.action = 'click';
    tooltip.opened = true;
    tooltip.handleMouseClick(mockEvent);
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should emit the didOpen and closeTooltips events when opening a tooltip', () => {
    const closeTooltipsSpy = jest.spyOn(tooltip.closeTooltips, 'emit');
    const openSpy = jest.spyOn(tooltip.didOpen, 'emit');
    tooltip._toggle(mockEvent);
    expect(closeTooltipsSpy).toHaveBeenCalled();
    expect(openSpy).toHaveBeenCalled();
  });

  it('should emit the didClose events when closing a tooltip', () => {
    const closeSpy = jest.spyOn(tooltip.didClose, 'emit');
    tooltip.opened = true;
    tooltip._toggle(mockEvent);
    expect(closeSpy).toHaveBeenCalled();
  });
});
