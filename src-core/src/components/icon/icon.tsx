import { Component, h, Host, Prop, Element } from "@stencil/core";

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
   * Defines the size of an icon. The default size is `small` (24px). `medium` is 36px, and `large` is 63px.
   */
  @Prop() size: "nano" | "small" | "medium" | "large" | "xtralarge" = "small";
  /**
   * Optional property that defines the background color of the button.
   * The default color will be inherited from its parent.
   */
  @Prop() color: 'anthracitegrey' | 'lightgrey' | 'white' | 'lifegreen' | 'lightgreen';
  /**
   * Indicates whether or not the icon is disabled.  Default is `false`.
   */
  @Prop() disabled: boolean = false;

  componentWillLoad() {
    this.el.classList.add(this.size);
  }

  render() {
    return (<Host class={[this.color, this.option, this.disabled ? 'disabled' : ''].join(' ')}><slot></slot></Host>);
  }
}