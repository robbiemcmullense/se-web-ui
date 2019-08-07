import { Component, Element, h, Prop } from "@stencil/core";

@Component({
  tag: "se-banner-item",
  styleUrl: "banner-item.scss",
  shadow: false
})
export class BannerItemComponent {
  /**
   * Sets the background image for your banner item.
   */
  @Prop() imageUrl: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setBlockTransparency();
    this.setButtonClass();
  }

  componentWillUpdate() {
    this.setBlockTransparency();
    this.setButtonClass();
  }

  private setBlockTransparency() {
    Array.from(this.el.querySelectorAll('se-block')).forEach((item: any) => {
      item.color = 'transparent';
    });
  }

  private setButtonClass() {
    Array.from(this.el.querySelectorAll('se-button')).forEach((item: any) => {
      item.option = 'banneritem';
    });
  }

  render() {
    return [
      <div class="image-container" style={{ backgroundColor: this.backgroundColor }}>
        {this.imageUrl ? <img class="image-background" style={{ backgroundImage: this.imageUrl }} /> : ''}
      </div>,
      <div class="banner-section-wrapper">
        <slot />
      </div>
    ];
  }
}