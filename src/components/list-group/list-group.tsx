import { Component, Prop, Watch, Element, Listen } from "@stencil/core";

@Component({
  tag: "se-list-group",
  styleUrl: "list-group.scss",
  shadow: true
})
export class ListGroupComponent {
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
   * Define if the list group should be displayed as selected (if one of its child is selected when collapsed)
   */
  @Prop({ mutable: true }) selected: boolean;

  /**
   * Place an icon on the left side of the item list.
   */
  @Prop() icon: string;

  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   */
  @Prop() iconColor: "primary" | "secondary";

  /**
   * Define if item group is collapsed/closed. a `se-list-group` cannot be selected from the outside
   */
  @Prop({ mutable: true }) collapsed: boolean = false;
  @Watch("collapsed") collapsedChanged() {
    if (!this.collapsed) {
      this.selected = false;
    } else {
      this.checkSelected();
    }
  }
  /**
   * Define the group indentation to add paddings to the list item (used when multiple list group)
   */
  @Prop() indentation: number = 0;

  /**
   * Define the them of the list. This them will be handled and modified by the parent element
   */
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" = "classic";


  @Listen('didSelectedChange') ChildUpdated() {
    this.checkSelected();
  }

  checkSelected(){
    let hasSelectedChild = false;
    Array.from(
      this.el.querySelectorAll("se-list-item, se-list-group")
    ).forEach((item: any) => {
      if (item.selected) {
        hasSelectedChild = true;
      }
    });
    this.selected = hasSelectedChild;
  }

  componentWillLoad() {
    Array.from(
      this.el.querySelectorAll("se-list-group > se-list-item, se-list-group > se-list-group")
    ).forEach((item: any) => {
      item.indentation = this.indentation + 1;
    });
  }

  private toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  hostData() {
    return {
      class: [this.selected && "selected", this.collapsed && "collapsed", this.option].join(" ")
    };
  }

  render() {
    // The button section is a copy of the list item. External component cannot be used inside a component (DOM issue)
    return [
      <button style={{ paddingLeft: `${20 * this.indentation}px` }} onClick={() => this.toggleCollapse()}>
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
        {this.option !== "treeview" && (
          <span class="se-icon medium">
          {this.collapsed ? "arrow2_down" : "arrow2_up"}
          </span>
        )}
        {this.option == "treeview" && (
          <span class="se-icon">
          arrow2_right
          </span>
        )}
      </button>,
      <div class="group-item">
        <slot />
      </div>
    ];
  }
}
