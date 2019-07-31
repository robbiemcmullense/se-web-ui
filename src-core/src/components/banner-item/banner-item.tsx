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
  @Prop() active: boolean;
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
  }

  componentWillUpdate() {
    this.setBlockTransparency();
  }

  private setBlockTransparency() {
    Array.from(this.el.querySelectorAll('se-block')).forEach((item: any) => {
      item.color = 'transparent';
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