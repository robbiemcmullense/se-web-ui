import { Component, h, Prop } from "@stencil/core";
import IconEcostruxure from './icon-ecostruxure.svg';

@Component({
  tag: "se-icon-ecostruxure",
  styleUrl: "icon-ecostruxure.scss",
  shadow: true
})
export class IconEcostruxureComponent {
  /**
   * Sets the size of the EcoStruxure icon.  The default setting is `small`.
   */
  @Prop() size: "small" | "medium" = "small";

  render() {
    return <img class={this.size} src={IconEcostruxure}/>;
  }
}
