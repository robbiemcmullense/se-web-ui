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
  @State() selectedItemIndex?: number;

  private setActiveItem(item: any): void {
    if (this.items.length) {
      this.items.forEach((item: any) => {
        item.setActive(false);
      });
      item.setActive(true);
      this.selectedItem = item;
      this.selectedItemIndex = this.items.indexOf(item);
    }
  }

  private changeActive(index: string) {
    let item = index === 'previous' ? this.items[this.selectedItemIndex-1] : this.items[this.selectedItemIndex+1];
    if (item) {
      this.setActiveItem(item);
    }
  }

  renderList() {
    return this.items.map((item: any) => {
      return [
        <li class={{'active': item.active}} />,
      ]
    })
  }

  componentWillLoad() {
    this.items = Array.from(this.el.querySelectorAll('se-banner-item'));
    if (this.items.length) {
      this.setActiveItem(this.items[0]);
    }
  }

  render() {
    return (
      <div class="se-banner">
        <ol class="banner-indicators">
          {this.renderList()}
        </ol>
        <slot></slot>
        <a class="previous-indicator" href="#" onClick={() => this.changeActive('previous')}>
          <se-icon size="xlarge">arrow2_left</se-icon>
        </a>
        <a class="next-indicator" href="#" onClick={() => this.changeActive('next')}>
          <se-icon size="xlarge">arrow2_right</se-icon>
        </a>
      </div>
    );
  }

}