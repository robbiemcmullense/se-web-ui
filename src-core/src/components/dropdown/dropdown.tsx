import { Component, h, Prop, State, Method, Element, Event, EventEmitter, Listen } from '@stencil/core';


@Component({
  tag: 'se-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true
})
export class DropdownComponent {
  @Element() el: HTMLElement;
  /**
   * Event emitted when the dropdown has been opened.
   */
  @Event() didOpen: EventEmitter;
  /**
   * Event emitted when the dropdown has been closed.
   */
  @Event() didClose: EventEmitter;
  /**
   * Defines how to align the dropdown container.
   * `left`: Position the container with respect to the left side of the trigger element.
   * `right`: Position the container with respect to the right side of the trigger element.
   */
  @Prop() alignment: 'left' | 'right' = 'left';
  @State() opened: boolean = false;
  @Listen('click', { target: 'window' })
  handleClick(ev) {
    if (this.opened) {
      this._toggle(ev);
    }
  }

  @Listen('touchstart', { target: 'window' })
  handleTouchstart(ev) {
    if (this.opened) {
      this._toggle(ev);
    }
  }

  /**
   * Method to open the dropdown from outside its parent element.
   */
  @Method()
  async open() {
    this.opened = true;
  }

  /**
   * Method to close the dropdown from outside its parent element.
   */
  @Method()
  async close() {
    this.opened = false;
  }

  _toggle(ev: Event) {
    ev.stopPropagation()
    if (this.opened) {
      this.close();
      this.didClose.emit();
    } else {
      this.open();
      this.didOpen.emit();
    }
  }

  render() {
    return (
      <div class={['se-dropdown', this.alignment].join(' ')}>
        <div aria-haspopup="true" aria-expanded="false" onClick={(ev) => this._toggle(ev)}>
          <slot name="trigger"></slot>
        </div>
        <div class={`${this.opened ? 'show' : ''} dropdown-content`}>
          <slot></slot>
        </div>
      </div>
    )
  }
}