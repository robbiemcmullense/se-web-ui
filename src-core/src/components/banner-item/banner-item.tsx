import { Component, Element, h, Host, Method, Prop, State } from "@stencil/core";

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
  /**
   * Defines if the menu item is active or not.
   * The default setting is `false`.
   */
  @Prop({ mutable: true }) active = false;
  @State() previous: boolean;
  @State() next: boolean;
  @Element() el: HTMLElement;

  /**
   * Sets the active banner item in your banner component.
   */
  @Method()
  async setActive(value: boolean) {
    this.active = value;
  }

  /**
   * Sets the banner item immediately to the left of the active item in your banner component.
   */
  @Method()
  async setPrevious(value: boolean) {
    this.previous = value;
  }

  /**
   * Sets the banner item immediately to the right of the active item in your banner component.
   */
  @Method()
  async setNext(value: boolean) {
    this.next = value;
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
    let isPrevious = this.el.className.includes('previous');
    let isNext = this.el.className.includes('next');
    if (isPrevious) {
      this.setPrevious(true);
    }
    if (isNext) {
      this.setNext(true);
    }
  }

  render() {
    return (
      <Host class={{'active': this.active, 'next': this.next && !this.active, 'previous': this.previous && !this.active}}>
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