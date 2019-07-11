import { Component, Element, h, Prop, State, Method } from "@stencil/core";

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
  @Prop({ mutable: true }) value: string;
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
      item.selected = item.value === this.value;
      if (item === this.items[this.items.length - 1]) {
        item.isLast = true;
      } else {
        item.isLast = false;
      }
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