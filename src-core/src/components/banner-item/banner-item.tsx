import { Component, h, Host, Method, Prop, State } from "@stencil/core";

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
   * Sets the header text for your banner item.
   */
  @Prop() header: string;
  /**
   * Sets the body text for your banner item.
   */
  @Prop() content: string;
  /**
   * Sets the footer text for your banner item button.
   */
  @Prop() footer: string;
  /**
   * Sets the width of your banner item.
   */
  @Prop() width: string;
  @State() active: boolean;

  @Method()
  async setActive(value: boolean) {
    this.active = value;
  }

  render() {
    return (
      <Host class={{'hide': !this.active}}>
        <div class={["image-container", !this.active ? 'hide' : ''].join(' ')}>
          <img class="image-background" style={{ backgroundImage: this.imageUrl }}/>
        </div>
        <div class="banner-section-wrapper">
          <se-block width={this.width}>
            <se-block-header>{this.header}</se-block-header>
            <se-block-content>{this.content}</se-block-content>
            <se-block-footer>
              <se-button>{this.footer}</se-button>
            </se-block-footer>
          </se-block>
        </div>
      </Host>
    );
  }
}