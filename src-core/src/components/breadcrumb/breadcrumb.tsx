import { Component, Element, h, State, Method } from "@stencil/core";

@Component({
  tag: "se-breadcrumb",
  styleUrl: "breadcrumb.scss",
  shadow: true
})
export class BreadcrumbComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the selected value of the breadcrumb group.
   */
  @State() items: HTMLElement[] = [];

  @Method()
  async updateChildren() {
    this.items = [];
  }

  componentWillLoad() {
    this.updateLastItem();
  }

  componentWillUpdate() {
    this.updateLastItem();
  }

  private updateLastItem() {
    this.items = Array.from(this.el.querySelectorAll('se-breadcrumb-item'));
    this.items.forEach((item: any) => {
      item.isLast = (item === this.items[this.items.length - 1]);
    });
  }

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol>
          <slot></slot>
        </ol>
      </nav>
    )
  }
}
