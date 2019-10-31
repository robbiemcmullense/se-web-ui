import { Component, h, Prop, Element } from "@stencil/core";

@Component({
  tag: "se-icon",
  styleUrl: "icon.scss",
  shadow: true
})
export class IconComponent {
  @Element() el: HTMLElement;
  /**
   * Optional property to define if the icon should act as a button (clickable).
   */
  @Prop() option: "button";
  /**
   * Defines the size of an icon.
   * `nano` sets the size to 14px.
   * `small` sets the size to 24px. (default setting)
   * `medium` sets the size to 32px
   * `large` sets the size to 52px.
   * `xlarge` sets the size to 62px.
   */
  @Prop() size: "nano" | "small" | "medium" | "large" | "xlarge" = "small";
  /**
   * Optional property that defines the background color of the button.
   * The default color will be inherited from its parent.
   */
  @Prop() color: "none" | "standard" | "alternative" | "primary" | "secondary" | "success" | "warning" | "error";

  render() {
    return (
      <div class={['se-icon-wrapper', `icon-${this.size}`, this.color, `icon-${this.option}`].join(" ")}>
        <slot />
      </div>
    );
  }
}