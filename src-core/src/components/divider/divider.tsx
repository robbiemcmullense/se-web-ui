import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-divider",
  styleUrl: "divider.scss",
  shadow: true
})
export class DividerComponent {
  /**
   * Indicates the visual appearance of your divider line.  Default setting is `horizontal`.
   */
  @Prop() option: "horizontal" | "vertical" | "inset" = "horizontal";
  /**
   * Indicates the color schema of your divider line.
   * Default setting is `standard`, rendering a light gray colored line.
   * The `alternative` property sets a white colored divider line.
   */
  @Prop() color: "standard" | "alternative" = "standard";

  hostData() {
    return {
      class: [this.option, this.color].join(' ')
    };
  }

  render() {
    return "";
  }
}
