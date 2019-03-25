import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-divider",
  styleUrl: "divider.scss",
  shadow: true
})
export class DividerComponent {
  @Prop() option: "horizontal" | "vertical" | "inset" = "horizontal";
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
