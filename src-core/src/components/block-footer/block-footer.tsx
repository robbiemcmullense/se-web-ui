import { Component, Element, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "se-block-footer",
  styleUrl: "block-footer.scss",
  shadow: true
})
export class BlockFooter {
  @Element() el: HTMLElement;
  /**
  * 
  */
  @Prop() divider: boolean;
  /**
   * Defines the visual appearance of a footer.
   * Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the footer with respect to the card design.
   */
  @Prop() option: 'card' | 'widget' | 'basic';
  /**
   * Defines the direction of the flex element.
   * `row` is the default direction. This is perfect to use with flex content.
   * `column` is useful in specific cases. Make sure you know what you are doing.
   */
  @Prop() direction: "row" | "column" = "row";

  render() {
    // console.log('Test block-footer', this.divider, this.option, this.el);
    return (
      <Host>
        {this.divider ? <se-divider></se-divider> : null}
        <div class={['se-block-footer', this.option, this.direction].join(' ')}>
          <div class="flex"><slot name="start"></slot></div>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
