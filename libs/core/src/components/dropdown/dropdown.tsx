import {
  Component,
  h,
  Prop,
  State,
  Method,
  Element,
  Event,
  EventEmitter,
  Listen,
  Host,
} from '@stencil/core';
import { createPopper, Placement } from '@popperjs/core';

@Component({
  tag: 'se-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class DropdownComponent {
  elmButton: HTMLSpanElement;
  elmDropdown: HTMLDivElement;
  @Element() el: HTMLElement;

  /**
   * Defines how to align the dropdown container.
   * `end`: Position the container with respect to the end side (right) of the trigger element.
   * `start`: Position the container with respect to the right side of the trigger element.
   * `right` (deprecated): Position the container with respect to the right side of the trigger element.
   * `left` (deprecated): Position the container with respect to the left side of the trigger element.
   */
  @Prop() alignment: 'end' | 'start' | 'right' | 'left' = 'start';
  /**
   * Defines the preferred vertically align of the dropdown. It will automatically re-position if the there is not enough space.
   * `top`: Position the container with respect to the top side of the trigger element.
   * `bottom`: Position the container with respect to the bottom side of the trigger element.
   */
  @Prop() verticalAlignment: 'top' | 'bottom' = 'bottom';
  /**
   * Sets the maximum width of the dropdown.  Default setting is "200px".
   */
  @Prop() maxWidth = '200px';
  /**
   * Sets the maximum height of the dropdown.  Default setting is "400px".
   */
  @Prop() maxHeight = '400px';
  /**
   * Method to open the dropdown from outside its parent element.
   */
  @Method()
  async open() {
    this.opened = true;
    this.didOpen.emit();
  }
  /**
   * Method to close the dropdown from outside its parent element.
   */
  @Method()
  async close() {
    this.opened = false;
    this.didClose.emit();
  }
  /**
   * Event emitted when the dropdown has been opened.
   */
  @Event() didOpen: EventEmitter;
  /**
   * Event emitted when the dropdown has been closed.
   */
  @Event() didClose: EventEmitter;

  /**
   * Event emitted when the dropdown has been touched. Every dropdown listen to this event to avoid avoid multiple dropdown open at the same time.
   */
  @Event({
    composed: false,
  })
  cancelAllDropdown: EventEmitter;

  /**
   * Define if we actively manipulate the dropdown
   */
  @State() isActive: boolean;

  @State() opened = false;

  @Listen('click', { target: 'window' })
  handleClick() {
    if (this.opened) {
      this.close();
    }
  }

  @Listen('cancelAllDropdown', { target: 'window' })
  handleCancelAllDropdown() {
    if (!this.isActive && this.opened) {
      this.close();
    }
  }

  _toggle(ev: Event) {
    ev.stopPropagation();
    this.isActive = true;
    if (this.opened) {
      this.close();
    } else {
      // close others only when trying to open one
      this.cancelAllDropdown.emit();
      this.open();
    }
    this.isActive = false;
  }

  componentDidLoad(): void {
    const alignment = ['left', 'start'].includes(this.alignment)
      ? 'start'
      : 'end';
    const verticalAlignmentOpposite =
      this.verticalAlignment === 'bottom' ? 'top' : 'bottom';
    createPopper(this.elmButton, this.elmDropdown, {
      strategy: 'fixed',
      placement: `${this.verticalAlignment}-${alignment}` as Placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: [`${verticalAlignmentOpposite}-${alignment}`],
          },
        },
      ],
    });
  }

  render() {
    return (
      <Host>
        <span
          ref={el => (this.elmButton = el)}
          aria-haspopup="true"
          aria-expanded={this.opened}
          onClick={ev => this._toggle(ev)}
        >
          <slot name="trigger"></slot>
        </span>
        <div
          ref={el => (this.elmDropdown = el)}
          class={{
            show: this.opened,
            content: true,
          }}
          style={{ maxWidth: this.maxWidth, maxHeight: this.maxHeight }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
