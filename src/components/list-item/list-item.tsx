import { Component, Prop, Element, Method, State } from "@stencil/core";

@Component({
  tag: "se-list-item",
  styleUrl: "list-item.scss",
  shadow: true
})
export class ListItemComponent {
  @Element() el: HTMLElement;

  /**
   * Define the title of the item
   */
  @Prop() item: string;
  /**
   * Define description of the item. placed under the title of the item.
   */
  @Prop() description: string;

  /**
   * Define if the list element should be selected or not
   */
  @Prop() selected: boolean;

  /**
   * Place an icon on the left side of the item list.
   */
  @Prop() icon: string;

  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   */
  @Prop() iconColor: "primary" | "secondary";

  /**
   * Define the group indentation to add paddings to the list item (used when multiple list group)
   */
  @State() indentation: number = 0;

  /**
   * Indicate if the button is part of a group of buttons within the `se-buttons` component.
   */
  @Method()
  setIndentation(indentation: number) {
    this.indentation = indentation;
  }

  /**
   * Define the them of the list. This them will be handled and modified by the parent element
   */
  @Prop() mode: "nav" | "classic" = "classic";

  hostData() {
    return {
      class: [this.selected && "selected", this.mode].join(" ")
    };
  }

  render() {
    return (
      <button style={{ paddingLeft: `${20 * this.indentation}px` }}>
        {this.mode === "nav" && this.selected && <div class="selectedBar" />}
        {!!this.icon && (
          <div class="nav-icon">
            <span class={["se-icon", this.iconColor].join(" ")}>
              {this.icon}
            </span>
          </div>
        )}
        <div class="nav-content">
          <div>{this.item}</div>
          <small> {this.description}</small>
        </div>
        {this.mode === "nav" && (
          <span class="se-icon medium">arrow2_right</span>
        )}
      </button>
    );
  }
}
