import {
  Component,
  h,
  State,
  Method,
  Event,
  Element,
  EventEmitter,
  Host,
  Prop,
  Listen,
} from '@stencil/core';
import { createPopper } from '@popperjs/core';

import { isTouchDevice } from '../../utils';
@Component({
  tag: 'se-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class TooltipComponent {
  elmButton: HTMLDivElement;
  elmTooltip: HTMLDivElement;
  popperInstance;

  @Element() el: HTMLElement;
  /**
   * Indicates the position of your tooltip.
   * The default setting is `bottom`, rendering the tooltip below its parent.
   */
  @Prop() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  /**
   * @deprecated only `hover` action should be used for tooltips
   */
  @Prop() action: 'click' | 'hover' = 'hover';
  /**
   * Indicates the color of the tooltip
   */
  @Prop() color: 'alternative' | 'information' = 'information';
  /**
   * Event emitted when the tooltip has been opened.
   */
  @Event() didOpen: EventEmitter;
  /**
   * Event emitted when the tooltip has been closed.
   */
  @Event() didClose: EventEmitter;
  /**
   * Closes the tooltip when another tooltip is opened.
   */
  @Event() closeTooltips: EventEmitter;
  /**
   * Method to open the tooltip separate from hovering or clicking the parent element.
   */
  @Method()
  async open() {
    this.opened = true;

    // Enable the event listeners
    this.popperInstance.setOptions({
      modifiers: [{ name: 'eventListeners', enabled: true }],
    });

    // Update its position
    this.popperInstance.update();
  }
  /**
   * Method to close the tooltip separate from hovering or clicking the parent element.
   */
  @Method()
  async close() {
    this.opened = false;

    // Disable the event listeners
    this.popperInstance.setOptions({
      modifiers: [{ name: 'eventListeners', enabled: false }],
    });
  }

  @State() opened = false;

  @Listen('touchstart', { target: 'window' }) handleTouchstart(ev) {
    if (this.opened) {
      this._toggle(ev);
    }
  }

  @Listen('touchend', { target: 'window' }) handleTouchEnd(ev) {
    if (this.opened) {
      this._toggle(ev);
    }
  }

  @Listen('mouseenter') handleMouseEnter(ev) {
    // On touch device, we remove hover or the tooltip keep open and closing
    if (!isTouchDevice()) {
      this._toggle(ev);
    }
  }

  @Listen('mouseleave') handleMouseLeave(ev) {
    // On touch device, we remove hover or the tooltip keep open and closing
    if (!isTouchDevice() && this.opened) {
      this._toggle(ev);
    }
  }

  @Listen('closeTooltips', { target: 'document' }) handleCloseTooltip() {
    this.close();
  }

  _toggle(ev: Event) {
    ev.stopPropagation();
    if (this.opened) {
      this.close();
      this.didClose.emit(ev);
    } else {
      this.closeTooltips.emit(); // close other tooltips before opening target tooltip
      this.open();
      this.didOpen.emit(ev);
    }
  }

  _toggleClick(ev: Event) {
    if (isTouchDevice()) {
      this._toggle(ev);
    }
  }

  componentDidLoad(): void {
    const containsFab = (this.el as HTMLElement).querySelector('se-fab');
    let elmButton = this.elmButton;

    if (containsFab) {
      elmButton = containsFab.shadowRoot.querySelector('.fab-button');
    }

    this.popperInstance = createPopper(elmButton, this.elmTooltip, {
      strategy: 'fixed',
      placement: this.position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }

  render() {
    return (
      <Host>
        <div ref={el => (this.elmButton = el)}>
          <slot name="tooltip" />
        </div>
        <div
          ref={el => (this.elmTooltip = el)}
          class={{
            show: this.opened,
            tooltip: true,
            [this.color]: true,
          }}
        >
          <div class="arrow" data-popper-arrow></div>
          <slot />
        </div>
      </Host>
    );
  }
}
