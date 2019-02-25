import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-icon",
  styleUrl: "icon.scss",
  shadow: true
})
export class IconComponent {
  /**
   * Define the size of an icon. default small (24px). medium is 40px and large is 63px.
   */
  @Prop() size: "small" | "medium" | "large" = "small";
  /**
   * Optional property that defines the background color of the button.
   * The default color will be inherited from its parent.
   * `primary` is a green color.
   * `accent` is a blue color.
   * `warn` is an orange color.
   * `error` is a red color.
   */
  @Prop() color: "primary" | "accent" | "warn" | "error";

  hostData() {
    return {
      class: [this.size, this.color].join(" ")
    };
  }

  render() {
    return <slot />;
  }
}
