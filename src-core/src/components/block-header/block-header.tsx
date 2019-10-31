import { Component, Watch, Element, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "se-block-header",
  styleUrl: "block-header.scss",
  shadow: true
})
export class BlockHeader {
  @Element() el: HTMLElement;
  /**
   * 
   */
  @Prop() divider: boolean;
  /**
   * Defines the visual appearance of a header.
   * Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the header with respect to the card design.
   */
  @Prop() option: 'card' | 'widget' | 'basic';
  @Watch("option") optionDidChange() {

  }

  render() {
    return (
      <Host>
        <div class={['se-block-header', this.option].join(' ')}>
          <slot name="start"></slot>
          <div class="flex middle"><slot></slot></div>
          <slot name="end"></slot>
        </div>
        {this.divider ? <se-divider></se-divider> : null}
      </Host>
    )
  }
}
