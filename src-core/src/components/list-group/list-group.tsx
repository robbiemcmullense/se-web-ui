import { Component, Prop, Watch, Element, Listen } from "@stencil/core";

@Component({
  tag: "se-list-group",
  styleUrl: "list-group.scss",
  shadow: true
})
export class ListGroupComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the title of the item.
   */
  @Prop() item: string;
  /**
   * Defines the description of the item, placed under its title.
   */
  @Prop() description: string;
  /**
   * Defines if the list group should be displayed as selected (if one of its child is selected when collapsed).
   */
  @Prop({ mutable: true }) selected: boolean;
  /**
   * Places an icon on the left side of the item list.
   */
  @Prop() icon: string;
  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   */
  @Prop() iconColor: "primary" | "secondary";
  /**
   * Defines if the item group is collapsed/closed. The `se-list-group` cannot be selected from the outside.
   */
  @Prop({ mutable: true }) collapsed: boolean = false;
  @Watch("collapsed") collapsedChanged() {
    this.checkSelected();
  }
  /**
   * Define the group indentation to add paddings to the list item (used with multiple list groups).
   */
  @Prop() indentation: number = 0;
  /**
   * Defines the theme of the list. This them will be handled and modified by the parent element.
   */
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" = "classic";

  @Listen('didSelectedChange') ChildUpdated() {
    this.checkSelected();
  }

  checkSelected(){
    if (!this.collapsed) {
      console.log('not collapsed');
      this.selected = false;
    } else {
      console.log('collapsed!');
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
      class: [this.selected ? "selected" : '', this.collapsed ? "collapsed" : '', this.option].join(" ")
    };
  }

  render() {
    // The button section is a copy of the list item. External component cannot be used inside a component (DOM issue)
    return [
      <button style={{ paddingLeft: `${20 * this.indentation}px` }} onClick={() => this.toggleCollapse()}>
        {(this.option === "nav" && this.selected) ? <div class="selectedBar"></div> : ''}
        {!!this.icon ?
          <div class="nav-icon">
            <span class={["se-icon", this.iconColor].join(" ")}>
              {this.icon}
            </span>
          </div>
        : ''}
        <div class="nav-content">
          <div>{this.item}</div>
          <small> {this.description}</small>
        </div>
        {this.option === "treeview"
          ? <span class="se-icon">{this.collapsed ? "arrow2_down" : "arrow2_right"}</span>
          : <span class="se-icon medium">{this.collapsed ? "arrow2_down" : "arrow2_up"}</span>
        }      
      </button>,
      <div class="group-item">
        <slot />
      </div>
    ];
  }
}