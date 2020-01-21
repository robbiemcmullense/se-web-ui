import { Component, Element, Event, EventEmitter, h, Host, Prop, Watch } from "@stencil/core";

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
  @Element() el: HTMLElement;

  @Watch('active') activeDidChange() {
    if (this.active) {
      this.didChange.emit();
    }
  }
  /**
   * Send an event when the banner item changes
   */
  @Event() didChange: EventEmitter<any>;

  setBlockTransparency() {
    Array.from(this.el.querySelectorAll('se-block')).forEach((item: any) => {
      item.classList.add('banner-child');
    });
  }

  setButtonClass() {
    Array.from(this.el.querySelectorAll('se-button')).forEach((item: any) => {
      item.classList.add('banner-child');
    });
  }

  componentWillLoad() {
    this.setBlockTransparency();
    this.setButtonClass();
  }

  componentWillUpdate() {
    this.setBlockTransparency();
    this.setButtonClass();
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