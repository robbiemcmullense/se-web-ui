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
   * Defines if the menu item is active or not.
   * The default setting is `false`.
   */
  @Prop({ mutable: true }) active = false;
  @Element() el: HTMLElement;

  /**
   * Sets the active banner item in your banner component.
   */
  @Method()
  async setActive(value: boolean) {
    this.active = value;
  }

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
    return (
      <Host class={{'hide': !this.active}}>
        <div class={["image-container", !this.active ? 'hide' : ''].join(' ')}>
          <img class="image-background" style={{ backgroundImage: this.imageUrl }}/>
        </div>
        <div class="banner-section-wrapper">
          <slot/>
        </div>
      </Host>
    );
  }
}