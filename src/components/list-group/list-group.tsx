import { Component, Prop, Watch, Element, State, Method } from "@stencil/core";

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
  @Prop() text: string;

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
   */
  @Prop() iconColor: 'standard' | 'alternative' | 'primary' | 'secondary' = 'standard';

  /**
   * Define if the list group should be displayed as selected (if one of its child is selected when collapsed)
   */
  @Prop({mutable: true}) selected: boolean;

  /**
   * Define if item group is collapsed/closed. a `se-list-group` cannot be selected from the outside
   */
  @Prop({mutable: true}) collapsed: boolean;
  @Watch('collapsed') collapsedChanged(){
    if(!this.collapsed){
      this.selected = false;
    } else {
      let hasSelectedChild = false;
      Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach((item: any) => {
        if(item.selected){
          hasSelectedChild = true;
        }
      });
      this.selected = hasSelectedChild
    }
  }



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
    this.updateItemMode();
  }
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

  private updateItemMode(){
    Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach((item: any) => {
      item.mode = this.mode;
      item.setIndentation(this.indentation + 1);
    });
  }

  private toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  private collapsible: boolean = true;

  render() {
    return [
      <se-list-item
        text={this.text}
        selected={this.selected}
        icon={this.icon}
        icon-color={this.iconColor}
        mode={this.mode}
        description={this.description}
        collapsible={this.collapsible}
        collapsed={this.collapsed}
        onClick={() => this.toggleCollapse()}
      />,
      <div class='group-item'>
        {!this.collapsed && <slot />}
      </div>
    ];
  }
}
