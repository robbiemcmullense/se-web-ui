import {Component,State,Method,Event,Element,EventEmitter,Listen,Prop} from "@stencil/core";
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
  @Listen("window:touchstart")
  handleTouchstart(ev) {
    this._toggle(ev);
  }
  @Listen("window:touchend")
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

  @Listen("window:click")
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
  open() {
    this.opened = true;    
  }

  /**
   * Method to close the tooltip from the outside.
   */
  @Method()
  close() {
    this.opened =false;
  }
  hostData() {
    return {
      class: [this.position].join(" ")
    };
  }

  render() {
    return [
      <div onClick={this.action == "click"? ev => {this._toggle(ev)}: () => {}}>
        <slot name="tooltip" />
      </div>,
      <div class={`${this.opened ? "show" : ""} tooltip`}>
        <slot />
      </div>
    ];
  }
}
