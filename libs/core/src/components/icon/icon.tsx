import { Component, h, Prop, Element, Host } from '@stencil/core';

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
    | 'information'
    | 'none';
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

  render() {
    const size = this.size || 'small';
    const TagType = this.option === 'button' ? 'button' : ('div' as any);
    // if contain svg, we don't use se-icon font-family in case there svg <text> is used
    const isSVG = !!this.el.querySelector('svg');
    let transform = '';

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
      <Host class={`icon-${size}`}>
        <TagType
          disabled={this.disabled}
          style={{ transform }}
          class={{
            disabled: this.disabled,
            wrapper: true,
            animation: this.animation,
            'icon-family': !isSVG,
            [this.color]: !!this.color,
            [`icon-${this.option}`]: !!this.option,
          }}
        >
          <slot />
        </TagType>
      </Host>
    );
  }
}
