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
} from '@stencil/core';

@Component({
  tag: 'se-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class DropdownComponent {
  @Element() el: HTMLElement;

  /**
   * Defines how to align the dropdown container.
   * `right`: Position the container with respect to the right side of the trigger element.
   * `left`: Position the container with respect to the left side of the trigger element.
   */
  @Prop() alignment: 'right' | 'left' = 'left';
  /**
   * Defines how to vertically align the dropdown container.
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
    // console.log(ev)
  }

  render() {
    return (
      <div class={{ [this.alignment]: true, [this.verticalAlignment]: true }}>
        <div
          aria-haspopup="true"
          aria-expanded={this.opened}
          onClick={ev => this._toggle(ev)}
        >
          <slot name="trigger"></slot>
        </div>
        <div
          class={`${this.opened ? 'show' : ''} dropdown-content`}
          style={{ maxWidth: this.maxWidth, maxHeight: this.maxHeight }}
        >
          <slot></slot>
        </div>
      </div>
    );
  }
}
