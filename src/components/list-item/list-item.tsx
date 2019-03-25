import { Component, Prop, Element, State} from "@stencil/core";

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
  @Prop() indentation: number = 0;

  /**
   * Define the them of the list. This them will be handled and modified by the parent element
   */
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" = "classic";

  @State() padding: number;

  hostData() {
    return {
      class: [this.selected && "selected", this.option].join(" ")
    };
  }

  componentDidLoad() {
    this.padding = 20 * this.indentation;
    if (this.option === "treeview") {
      this.padding += 24;
    }
  }

  render() {
    return (
      <button style={{ paddingLeft: this.padding + `px` }}>
        {this.option === "nav" && this.selected && <div class="selectedBar" />}
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
        {this.option === "nav" && (
          <span class="se-icon medium">arrow2_right</span>
        )}
        {this.option === 'classic' && (<slot></slot>)}
      </button>
    );
  }
}
