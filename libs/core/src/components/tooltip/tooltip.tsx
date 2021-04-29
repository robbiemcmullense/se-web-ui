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
  containsFab;
  delayTimer;
  popperDefault = [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ];

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
   * Add a delay to display the tooltip in millisecond.
   */
  @Prop() showDelay = 0;
  /**
   * Event emitted when the tooltip has been opened.
   */
  @Event() didOpen: EventEmitter;
  /**
   * Event emitted when the tooltip has been closed.
   */
  @Event() didClose: EventEmitter;

  /**
   * Method to open the tooltip separate from hovering or clicking the parent element.
   */
  @Method()
  async open() {
    this.delayTimer = setTimeout(
      () => {
        if (!this.containsFab) {
          // only maintain update when not on fab (glitch issue)
          // Enable the event listeners
          this.popperInstance?.setOptions({
            modifiers: [
              {
                name: 'eventListeners',
                enabled: true,
              },
              ...this.popperDefault,
            ],
          });
          // Update its position
          this.popperInstance?.update();
        }
        this.opened = true;
        this.didOpen.emit();
      },
      !isTouchDevice() ? this.showDelay : 0
    );
  }

  /**
   * Method to close the tooltip separate from hovering or clicking the parent element.
   */
  @Method()
  async close() {
    clearTimeout(this.delayTimer);
    if (!this.containsFab) {
      // Disable the event listeners
      this.popperInstance.setOptions({
        modifiers: [
          {
            name: 'eventListeners',
            enabled: false,
          },
        ],
      });
    }
    this.opened = false;
    this.didClose.emit();
  }

  @State() opened = false;

  @Listen('touchstart', { target: 'window' }) handleTouchstart(ev) {
    if (!ev?.path?.includes(this.el) && this.opened) {
      this.close();
    }
  }

  @Listen('mouseenter') handleMouseEnter() {
    // On touch device, we remove hover or the tooltip keep open and closing
    if (!isTouchDevice()) {
      this.open();
    }
  }

  @Listen('mouseleave') handleMouseLeave() {
    clearTimeout(this.delayTimer);
    if (!isTouchDevice() && this.opened) {
      this.close();
    }
  }

  _toggleClick() {
    if (isTouchDevice()) {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
  }

  componentDidLoad(): void {
    this.containsFab = (this.el as HTMLElement).querySelector('se-fab');
    const elmButton =
      this.containsFab?.shadowRoot?.querySelector('.fab-button') ||
      this.elmButton;

    this.popperInstance = createPopper(elmButton, this.elmTooltip, {
      strategy: 'fixed',
      placement: this.position,
      modifiers: (this.containsFab && this.popperDefault) || [],
    });
  }

  disconnectedCallback() {
    clearTimeout(this.delayTimer);
  }

  render() {
    return (
      <Host>
        <div
          ref={el => (this.elmButton = el)}
          onClick={() => {
            this._toggleClick();
          }}
        >
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
          <slot />
          <div class="arrow" data-popper-arrow></div>
        </div>
      </Host>
    );
  }
}
