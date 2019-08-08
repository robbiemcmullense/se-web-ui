import { Component, Element, h, Host, Method, Prop } from "@stencil/core";

@Component({
  tag: "se-banner-item",
  styleUrl: "banner-item.scss",
  shadow: true
})
export class BannerItemComponent {
  /**
   * Sets the background image for your banner item.
   */
  @Prop() imageUrl: string;
  /**
   * Indicates the active banner item in your banner component.
   */
  @Prop({ mutable: true }) active: boolean = false;
  /**
   * Method to set the active banner item outside of the banner and banner item components.
   */
  @Method()
  async setActive(value: boolean) {
    this.active = value;
  }

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
      item.classList.add('banneritem');
    });
  }

  private setButtonClass() {
    Array.from(this.el.querySelectorAll('se-button')).forEach((item: any) => {
      item.option = 'banneritem';
    });
  }

  render() {
    return (
      <Host class={{ 'active': this.active }}>
        <div class="image-container">
          <img class="image-background" style={{ backgroundImage: this.imageUrl }} />
          <div class="background-overlay"></div>
        </div>
        <div class="banner-section-wrapper">
          <slot />
        </div>
      </Host>
    );
  }
}