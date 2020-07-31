import { Component, h, Prop, Element, Host } from "@stencil/core";

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
  @Prop() option: "button";
  /**
   * Defines the size of an icon.
   * `nano` sets the size to 14px.
   * `small` sets the size to 24px.(default setting)
   * `medium` sets the size to 32px.
   * `large` sets the size to 52px.
   * `xlarge` sets the size to 62px.
   */
  @Prop() size: "nano" | "small" | "medium" | "large" | "xlarge";
  /**
   * Optional property that defines the background color of the button.
   * The default color will be inherited from its parent.
   */
  @Prop() color: "standard" | "alternative" | "primary" | "secondary" | "success" | "warning" | "error" | "information";
  /**
  * Optional property that defines if the button is disabled.  Set to `false` by default.
  */
 @Prop() disabled = false;


  render() {
    const size = this.size || 'small';
    const TagType = this.option === 'button' ? 'button' : 'div' as any;

    return (
      <Host class={`icon-${size}`}>
        <TagType
          disabled={this.disabled}
          class={{
          'disabled': this.disabled,
          'se-icon-wrapper': true,
          [this.color]: !!this.color,
          [`icon-${this.option}`] : !!this.option}}>
            <slot />
        </TagType>
      </Host>
    );
  }
}
