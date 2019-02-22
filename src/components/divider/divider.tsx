import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-divider",
  styleUrl: "divider.scss",
  shadow: true
})
export class Divider {
  @Prop() mode: "horizontal" | "vertical" | "inset" = "horizontal";

  hostData() {
    return {
      class: {
        horizontal: this.mode === "horizontal",
        vertical: this.mode === "vertical",
        inset: this.mode === "inset"
      }
    };
  }

  render() {
    return "";
  }
}
