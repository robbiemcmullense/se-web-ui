import { Component, h, Prop } from "@stencil/core";
import IconLifeison from './icon-lifeison.svg';

@Component({
  tag: "se-icon-lifeison",
  styleUrl: "icon-lifeison.scss",
  shadow: true
})
export class IconLifeisonComponent {
  /**
   * Defines the color of the logo.
   * `standard`: displays a light green / dark green conventional SE logo.
   * `inherited`: default option, which takes the color from it's parent.
   */
  @Prop() color: "standard" | "inherited" = "inherited";

  render() {
    return <img alt="Life is On" class={this.color} src={IconLifeison}/>;
  }
}