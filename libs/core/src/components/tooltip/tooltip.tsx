import { Component, h, State, Method, Event, Element, EventEmitter, Listen, Prop } from "@stencil/core";
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

  @State() opened = false;

  @Listen('touchstart', { target: 'window' }) handleTouchstart(ev) {
    this._toggle(ev);
  }

  @Listen('touchend', { target: 'window' }) handleTouchEnd(ev) {
    this._toggle(ev);
  }

  @Listen("mouseenter") handleMouseEnter(ev) {
    if (this.action === "hover") {
      this._toggle(ev);
    }
  }

  @Listen("mouseleave") handleMouseLeave(ev) {
    if (this.action === "hover" && this.opened) {
      this._toggle(ev);
    }
  }

  @Listen('click', { target: 'window' }) handleMouseClick(ev) {
    if (this.action === "click" && this.opened) {
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

  render() {
    const containsFab = (this.el as HTMLElement).querySelector("se-fab");
    const tooltipPosition = this.el.getAttribute("position");

    if (!!this.el.shadowRoot.querySelector("div .tooltip") && containsFab && containsFab.getAttribute("position") === "top") {
      const fabButtonHeight = this.el.querySelector("se-fab").shadowRoot.querySelector("se-button").shadowRoot.querySelector("button");
      const fabHeight = this.el.querySelector("se-fab").shadowRoot.querySelector("div").offsetTop;
      if (!!tooltipPosition && tooltipPosition === "left") {
        this.el.shadowRoot.querySelector(".tooltip").setAttribute("style", `top: calc(${fabHeight}px + ${fabButtonHeight.offsetTop}px + (${fabButtonHeight.offsetHeight}px / 2))`)
      } else if (!!tooltipPosition && tooltipPosition === "top") {
        this.el.shadowRoot.querySelector(".tooltip").setAttribute("style", `bottom: calc(100vh - ${fabHeight}px - 8px `)
      } else if (tooltipPosition === null || tooltipPosition === "bottom") {
        this.el.shadowRoot.querySelector(".tooltip").setAttribute("style", `top: calc(${fabHeight}px + ${fabButtonHeight.offsetHeight}px + 8px`)
      }
    }
    return (
      <div class={[
        this.position ? `tooltip-${this.position}` : 'tooltip-bottom',
        containsFab ? `tooltip-fab${containsFab.getAttribute("position") === "top" ? '-top' : ''}` : '']
        .join(' ')}>
        <div onClick={this.action == "click" ? ev => {this._toggle(ev)} : () => {}}>
          <slot name="tooltip" />
        </div>
        <div class={`${this.opened ? "show" : ""} tooltip`}>
          <slot />
        </div>
      </div>
    )
  }
}
