import { Component, Prop, Element } from "@stencil/core";

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
  @Prop() option: 'button';

  /**
   * Define the size of an icon. default small (24px). medium is 40px and large is 63px.
   */
  @Prop() size: "small" | "medium" | "large" = "small";
  /**
   * Optional property that defines the background color of the button.
   * The default color will be inherited from its parent.
   */
  @Prop() color: 'standard' | 'alternative' | 'primary' | 'secondary';

  componentWillLoad() {
    this.el.classList.add(this.size);
  }

  hostData() {
    return {
      class: [this.color, this.option].join(" ")
    };
  }

  render() {
    return <slot />;
  }
}
