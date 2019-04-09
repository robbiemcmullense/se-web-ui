import { Component, Prop, State, Method, Element, Event, EventEmitter, Listen } from '@stencil/core';


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
   * Define how to align the dropdown container.
   * `left`: Position the container regarding to the left side of the trigger element.
   * `right`: Position the container regarding to the right side of the trigger element.
   */
  @Prop() alignment: 'left'|'right' = 'left';
  @State() opened: boolean = false;
  @Listen('window:click')
  handleClick(ev) {
    if(this.opened){
      this._toggle(ev);
    }
  }

  @Listen('window:touchstart')
  handleTouchstart(ev) {
    if(this.opened){
      this._toggle(ev);
    }
  }

  /**
   * Method to open the dropdown from the outside.
   */
  @Method()
  open(){
    this.opened = true;
  }

  /**
   * Method to close the dropdown from the outside.
   */
  @Method()
  close(){
    this.opened = false;
  }

  _toggle(ev: Event) {
    ev.stopPropagation()
    if(this.opened){
      this.close();
      this.didClose.emit();
    } else {
      this.open();
      this.didOpen.emit();
    }
  }

  hostData() {
    return {
      class: [this.alignment].join(" ")
    };
  }

  render() {
    return [
        <div aria-haspopup="true" aria-expanded="false" onClick={(ev) => this._toggle(ev)}>
          <slot name="trigger"></slot>
        </div>,
        <div class={`${this.opened? 'show': ''} dropdown-content`}>
          <slot></slot>
        </div>
     ];
  }
}
