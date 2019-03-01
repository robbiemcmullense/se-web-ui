import { Component, Prop, State, Method } from "@stencil/core";

@Component({
  tag: "se-list-item",
  styleUrl: "list-item.scss",
  shadow: true
})
export class ListItemComponent {

  /**
   * Define if the list element should be selected or not
   */
  @Prop() text : string;

  /**
   * Define if the list element should be selected or not
   */
  @Prop() selected : boolean;

  /**
   * Place an icon on the left side of the item list.
   */
  @Prop() icon : string;

  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   */
  @Prop() iconColor: 'standard' | 'alternative' | 'primary' | 'secondary';

  /**
   * Define if the item should behave as a an collapsible (used by `se-item-group`)
   */
  @Prop() collapsible: boolean = false;

  /**
   * Define if item group is collapsed/closed. update the icon to change from `up` to `down`. Used by `se-item-group`.
   */
  @Prop() collapsed: boolean;


  /**
   * Define description of the item. placed under the title of the item.
   */
  @Prop() description: string;

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
  @Prop() mode: 'nav' | 'classic' = 'classic';

  hostData() {
    return {
      class: [this.selected && 'selected', this.mode].join(' ')
    };
  }

  renderIcon () {
    let iconToRender: any = '';
    if(this.collapsible){
      if (!this.collapsed) {
        iconToRender = <se-icon size="medium">arrow2_up</se-icon>
      } else {
        iconToRender = <se-icon size="medium">arrow2_down</se-icon>
      }
    } else if( this.mode=== 'nav'){
      iconToRender = <se-icon size="medium">arrow2_right</se-icon>
    }
    return iconToRender;
  }

  render() {
    return [
      <button style={{'paddingLeft': `${20 * this.indentation}px`}}>
        <div class="selectedBar"></div>
        {!!this.icon && <div class="nav-icon"><se-icon size="small" color={this.iconColor}>{this.icon}</se-icon></div>}
        <div class="nav-content">
          <div>{this.text}</div>
          <small> {this.description}</small>
        </div>
        {this.renderIcon()}
      </button>,
      <se-divider></se-divider>
    ];
  }
}
