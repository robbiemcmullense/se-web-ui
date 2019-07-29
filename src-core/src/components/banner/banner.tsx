import { Component, Element, h, State } from "@stencil/core";

@Component({
  tag: "se-banner",
  styleUrl: "banner.scss",
  shadow: true
})
export class BannerComponent {

  @Element() el: HTMLElement;
  @State() items: HTMLElement[] = [];
  @State() selectedItem?: HTMLElement;

  private setActive (item: any): void {
    if (this.items.length) {
      this.items.forEach((item: any) => {
        item.setActive(false);
      });
      item.setActive(true);
      this.selectedItem = item;
    }
  }

  private changeActive() {
    this.items.forEach((item: any) => {
      if (this.selectedItem === item) {
        this.setActive(item);
      }
    })
  }

  componentWillLoad() {
    this.items = Array.from(this.el.querySelectorAll('se-banner-item'));
    if (this.items.length) {
      this.setActive(this.items[0]);
    }
  }

  render() {
    return (
      <div class="se-banner">
        <ol class="banner-indicators">
          <li></li>
          <li></li>
          <li></li>
        </ol>
        <slot></slot>
        <a class="previous-indicator" href="#previous" onClick={() => this.changeActive()}>
          <se-icon size="large">arrow2_left</se-icon>
        </a>
        <a class="next-indicator" href="#next" onClick={() => this.changeActive()}>
        <se-icon size="large">arrow2_right</se-icon>
        </a>
      </div>
    );
  }

}