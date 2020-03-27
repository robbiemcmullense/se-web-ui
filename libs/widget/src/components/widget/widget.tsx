import { Component, h } from "@stencil/core";

@Component({
  tag: "se-widget",
  styleUrl: "widget.scss",
  shadow: true
})
export class WidgetComponent {

  render() {
    return (
      <se-block>
        <se-block-header>cool</se-block-header>
        <se-block-content>grrr</se-block-content>
        <se-block-footer>
          <se-button>Cool!</se-button>
        </se-block-footer>
      </se-block>
    );
  }
}
