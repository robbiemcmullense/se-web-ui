import { Component, Prop, Watch, Element } from "@stencil/core";

@Component({
  tag: "se-list-group",
  styleUrl: "list-group.scss",
  shadow: true
})
export class ListGroupComponent {
  @Element() el: HTMLElement;

  /**
   * Define if the list element should be selected or not
   */
  @Prop() itemTitle: string;

  /**
   * Define if the list element should be selected or not
   */
  @Prop() selected: boolean;

  /**
   * Define if item group is collapsed/closed.
   */
  @Prop({mutable: true}) collapsed: boolean;

  /**
   * Place an icon on the left side of the item list.
   */
  @Prop() icon: string;

  /**
   * Define description of the item. placed under the title of the item.
   */
  @Prop() description: string;

  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   * `primary` is a green color.
   * `accent` is a blue color.
   * `warn` is an orange color.
   * `error` is a red color.
   */
  @Prop() iconColor: "primary" | "accent" | "warn" | "error";

  /**
   * Define the group indentation to add paddings to the list item (used when multiple list group)
   */
  @Prop() indentation: number = 0;

  /**
   * Define the them of the list. This them will be handled and modified by the parent element
   */
  @Prop() mode: "nav" | "classic" = "classic";
  @Watch("mode") PropDidChange() {
    this.updateItemMode();
  }

  componentDidLoad() {
    this.updateItemMode();
  }

  private updateItemMode() {
    const items: any = this.el.querySelectorAll("se-list-item");
    const groups: any = this.el.querySelectorAll("se-list-group");
    const allItems: any[] = [ ...items, ...groups];

    allItems.forEach(item => {
      item.mode = this.mode;
      item.indentation = this.indentation + 1;
    });
  }

  private toggleCollapse() {
    console.log('collapse toggle')
    this.collapsed = !this.collapsed;
  }

  render() {
    const collapsible = true;
    return [
      <se-list-item
        item-title={this.itemTitle}
        selected={this.selected}
        icon={this.icon}
        icon-color={this.iconColor}
        mode={this.mode}
        description={this.description}
        indentation={this.indentation}
        collapsible={collapsible}
        collapsed={this.collapsed}
        onClick={() => this.toggleCollapse()}
      />,
      <div class={['group-item'].join(' ')}>
        {!this.collapsed && <slot />}
      </div>
    ];
  }
}
