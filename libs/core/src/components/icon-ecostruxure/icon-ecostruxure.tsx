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
  /**
   * Defines the color of the logo.
   * `standard`: displays a light green / dark green conventional SE logo.
   * `inherited`: default option, which takes the color from it's parent.
   */
  @Prop() color: "standard" | "inherited" = "standard";

  render() {
    return <span class={[this.size, this.color].join(' ')} innerHTML={IconEcostruxure}/>;
  }
}
