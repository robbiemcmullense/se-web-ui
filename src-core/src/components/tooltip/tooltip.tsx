import {Component, h, Host, State, Method, Event, Element, EventEmitter, Listen, Prop} from "@stencil/core";
@Component({
  tag: "se-tooltip",
  styleUrl: "tooltip.scss",
  shadow: true
})
export class TooltipComponent {

  @Element() el: HTMLElement;
  /**
   * Indicates the position color of your tooltip.
   */
  @Prop() position: "top" | "bottom" | "left" | "right" = "bottom";
  /**
   * Indicates the action of your tooltip.
   */
  @Prop() action: "click" | "hover" = "hover";
  /**
   * Event emitted when the tooltip has been opened.
   */
  @Event() didOpen: EventEmitter;
  /**
   * Event emitted when the tooltip has been closed.
   */
  @Event() didClose: EventEmitter;
  @State() opened: boolean = false;
  @Listen('touchstart', {target: 'window'})
  handleTouchstart(ev) {
    this._toggle(ev);
  }
  @Listen('touchend', {target: 'window'})
  handleTouchEnd(ev) {
    this._toggle(ev);
  }
  @Listen("mouseover")
  handleMouseOver(ev) {   
    if (this.action === "hover") {
      this._toggle(ev);
    }
  }

  @Listen("mouseleave")
  handleMouseLeave(ev) {
    if (this.action === "hover" && this.opened) {
      this._toggle(ev);
    }
  }

  @Listen('click', {target: 'window'})
  handleMouseClick(ev) {
    if (this.action === "click" && this.opened ) {
     this._toggle(ev);
    }
  }
 
  _toggle(ev: Event) {
    ev.stopPropagation();
    if (this.opened) {
      this.close(); 
      this.didClose.emit(ev);    
    } else{
      this.open();
      this.didOpen.emit(ev);
    }
  }
  
  /**
   * Method to open the tooltip from the outside.
   */
  @Method()
  async open() {
    this.opened = true;    
  }

  /**
   * Method to close the tooltip from the outside.
   */
  @Method()
  async close() {
    this.opened =false;
  }

  render() {
    return (
      <Host class={this.position}>
        <div onClick={this.action == "click"? ev => {this._toggle(ev)}: () => {}}>
          <slot name="tooltip" />
        </div>
        <div class={`${this.opened ? "show" : ""} tooltip`}>
          <slot />
        </div>
      </Host>
    )
  }
}