import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'se-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconComponent {
  @Element() el: HTMLElement;
  /**
   * Optional property to define if the icon should act as a button (clickable).
   */
  @Prop() option: 'button';
  /**
   * Defines the size of an icon.
   * `nano` sets the size to 14px.
   * `micro` sets the size to 18px.
   * `small` sets the size to 24px.(default setting)
   * `medium` sets the size to 32px.
   * `large` sets the size to 52px.
   * `xlarge` sets the size to 62px.
   */
  @Prop() size: 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Optional property that defines the background color of the button.
   * The default color will be inherited from its parent.
   */
  @Prop() color:
    | 'standard'
    | 'alternative'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'information';
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;

  /**
   * Optional property that defines if the icon should animate when changing states (rotation for example).
   */
  @Prop() animation = false;

  /**
   * Optional property that defines the icon should be rotated.
   */
  @Prop() rotate: number | string = 0;

  /**
   * Optional property that defines if the icon should be mirrored.
   */
  @Prop() mirror: 'horizontal' | 'vertical' | 'both';

  /**
   * Optional property that defines the hover background color of the button.
   * This property is ignored if noHover is set, or if the icon option is not set to "button".
   */
  @Prop() hoverColor: 'standard' | 'alternative' | 'primary' | 'secondary';

  /**
   * Optional property that disables the hover background (only if option property is set to button).
   * If set, this will override the hoverColor property and ignore it.
   */
  @Prop() noHover = false;

  render() {
    const size = this.size || 'small';
    const TagType = this.option === 'button' ? 'button' : ('div' as any);
    // if contain svg, we don't use se-icon font-family in case there svg <text> is used
    const isSVG = !!this.el.querySelector('svg');
    let transform = '';
    const noHover = !!this.noHover || this.option !== 'button';

    switch (this.mirror) {
      case 'both':
        transform += 'scale(-1)';
        break;
      case 'horizontal':
        transform += 'scaleX(-1)';
        break;
      case 'vertical':
        transform += 'scaleY(-1)';
        break;
    }
    if (this.rotate) {
      transform += ` rotate(${
        this.rotate.toString().includes('deg')
          ? this.rotate
          : `${this.rotate}deg`
      })`;
    }

    return (
      <Host class={`icon-${size}`} onClick={() => this.el.blur()}>
        <TagType
          disabled={this.disabled}
          style={{ transform }}
          type={this.option === 'button' ? 'button' : null}
          class={{
            disabled: this.disabled,
            wrapper: true,
            animation: this.animation,
            'icon-family': !isSVG,
            [this.color]: !!this.color,
            [`icon-${this.option}`]: !!this.option,
            [`hover-${this.hoverColor}`]: !!this.hoverColor && !noHover,
            'no-hover': noHover,
          }}
        >
          <slot />
        </TagType>
      </Host>
    );
  }
}
