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

  it('should set opened to true when calling the open method', () => {
    tooltip.open();
    expect(tooltip.opened).toBeTruthy();
  });

  it('should set opened to false when calling the close method', () => {
    tooltip.opened = true;
    tooltip.close();
    expect(tooltip.opened).toBeFalsy();
  });

  it('should render', async() => {
    const page = await newSpecPage({
      components: [TooltipComponent],
      html: `<se-tooltip></se-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <se-tooltip>
        <mock:shadow-root>
          <div class="bottom">
            <div>
              <slot name="tooltip"></slot>
            </div>
            <div class="tooltip">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </se-tooltip>
    `);
  });

  it('should call the close method when the closeTooltips event is emitted', () => {
    const eventSpy = jest.spyOn(tooltip, 'close');
    tooltip.handleCloseTooltip();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should call the _toggle method twice, when the touchstart and touchend events occur', () => {
    const mockEvent = {stopPropagation: () => {return '';}};
    const eventSpy = jest.spyOn(tooltip, '_toggle');
    tooltip.handleTouchstart(mockEvent);
    tooltip.handleTouchEnd(mockEvent);
    expect(eventSpy).toHaveBeenCalledTimes(2);
  });

  it('should call the _toggle method twice, when the mouseover and mouseleave hover events occur', () => {
    const mockEvent = {stopPropagation: () => {return '';}};
    const eventSpy = jest.spyOn(tooltip, '_toggle');
    tooltip.action = 'hover';
    tooltip.handleMouseOver(mockEvent);
    tooltip.handleMouseLeave(mockEvent);
    expect(eventSpy).toHaveBeenCalledTimes(2);
  });

  it('should call the _toggle method on a click with the tooltip open', () => {
    const mockEvent = {stopPropagation: () => {return '';}};
    const eventSpy = jest.spyOn(tooltip, '_toggle');
    tooltip.action = 'click';
    tooltip.opened = true;
    tooltip.handleMouseClick(mockEvent);
    expect(eventSpy).toHaveBeenCalled();
  });
});
