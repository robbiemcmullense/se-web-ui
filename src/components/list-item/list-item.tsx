import { Component, Prop } from "@stencil/core";

@Component({
  tag: "se-list-item",
  styleUrl: "list-item.scss",
  shadow: true
})
export class ListItemComponent {

  /**
   * Define if the list element should be selected or not
   */
  @Prop() itemTitle : string;

  /**
   * Define if the list element should be selected or not
   */
  @Prop() selected : boolean;

  /**
   * Define the them of the list. This them will be handled and modified by the parent element
   */
  @Prop() mode: "nav" | "classic" | "checkbox" | "expander";

  hostData() {
    return {
      class: [this.selected && 'selected', this.mode].join(' ')
    };
  }

  render() {
    return [
      <button>
        <div>
          <div class="selectedBar"></div>
          <div class="nav-text">{this.itemTitle}</div>
        </div>
        <i class="se-icon">arrow2_right</i>
      </button>,
      <se-divider></se-divider>
    ];
  }
}
