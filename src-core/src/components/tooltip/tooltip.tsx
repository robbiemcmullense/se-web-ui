import {Component, h, State, Method, Event, Element, EventEmitter, Listen, Prop} from "@stencil/core";
@Component({
  tag: "se-tooltip",
  styleUrl: "tooltip.scss",
  shadow: true
})
export class TooltipComponent {

  @Element() el: HTMLElement;
  /**
   * Indicates the position of your tooltip.
   * The default setting is `bottom`, rendering the tooltip below its parent.
   */
  @Prop() position: "top" | "bottom" | "left" | "right" = "bottom";
  /**
   * Indicates the action of your tooltip.
   * The default setting is `hover`, triggering the tooltip when hovering over the parent element.
   * The `click` action triggers the tooltip when you click on the parent element.
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
  /**
   * Closes the tooltip when another tooltip is opened.
   */
  @Event() closeTooltips: EventEmitter;
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

  @Listen('closeTooltips', {target: 'document'})
  handleCloseTooltip() {
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
  
  /**
   * Method to open the tooltip separate from hovering or clicking the parent element.
   */
  @Method()
  async open() {
    this.opened = true;    
  }

  /**
   * Method to close the tooltip separate from hovering or clicking the parent element.
   */
  @Method()
  async close() {
    this.opened = false;
  }

  componentDidLoad() {
    const containsFab = (this.el as HTMLElement).querySelector("se-fab");
    const fabTop = (this.el as HTMLElement).querySelector("se-fab").getAttribute("position") === "top";

    if (containsFab && fabTop ) { // console.log("fab top", this.el, this.el.children, this.el.children[0]);
      this.el.classList.add("fab-tip-top")
    } else if (containsFab) { // console.log("fab bottom", this.el, this.el.children, this.el.children[0]);
      this.el.classList.add("fab-tip")
    }

    if (containsFab && fabTop) {
      const tooltipPosition = this.el.getAttribute("position");
      const fabHeight = this.el.querySelector("se-fab").shadowRoot.querySelector("se-button").shadowRoot.querySelector("button").offsetHeight;
      const fab = this.el.querySelector("se-fab").shadowRoot.querySelector("div").offsetTop;
      const button = this.el.querySelector("se-fab").shadowRoot.querySelector("se-button").shadowRoot.querySelector("button").offsetTop;
      if (tooltipPosition === "left") {
        this.el.shadowRoot.querySelector(".tooltip").setAttribute("style", `top: calc(-100vh + ${fab}px + ${button}px + (${fabHeight}px / 2))`)
      } else if (tooltipPosition === "top") {
        this.el.shadowRoot.querySelector(".tooltip").setAttribute("style", `bottom: calc(100vh - ${fab}px `)
      } else if (tooltipPosition === "bottom") {
        this.el.shadowRoot.querySelector(".tooltip").setAttribute("style", `top: calc(-100vh + ${fab}px + ${fabHeight}px + 16px`)
      }
    }
  }

  render() {
    return (
      <div class={this.position}>
        <div onClick={this.action == "click"? ev => {this._toggle(ev)}: () => {}}>
          <slot name="tooltip" />
        </div>
        <div class={`${this.opened ? "show" : ""} tooltip`}>
          <slot />
        </div>
      </div>
    )
  }
}