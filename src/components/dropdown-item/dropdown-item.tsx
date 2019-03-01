import { Component, Element, Prop } from "@stencil/core";

@Component({
  tag: "se-dropdown-item",
  styleUrl: "dropdown-item.scss"
})
export class DropdownItemComponent {
  @Element() el;
  @Prop() value: any;
  @Prop() active: boolean = false;

  hostData() {
    return {
      'class': {
        'active': this.active,
        'selected': this.active
      }
    };
  }

  render() {
    return [
      <div class="dropdown-item">
        <slot />
      </div>,
      <se-divider />
    ];
  }
}
