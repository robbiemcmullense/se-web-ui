import { Component, Event, EventEmitter, h, Prop, Watch, Element, Listen } from "@stencil/core";

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
   * Defines if the list group should be displayed as selected (if one of its child elements is selected when collapsed).
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
   * Defines if the item group is collapsed/closed. The default setting is `false`.
   */
  @Prop({ mutable: true }) collapsed: boolean = false;
  @Watch("collapsed") collapsedChanged() {
    this.checkSelected();
  }
  /**
   * Defines the group indentation to add paddings to the list item (used with multiple list groups).
   */
  @Prop() indentation: number = 0;
  /**
   * Defines the style of the list. The default setting is `classic`, and the style will be handled and modified by the parent element.
   */
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" | "headline" = "classic";
  /**
   * Defines if list groups can be collapsed, true by default.
   */
  @Prop() canCollapse: boolean = true;
  @Prop() selectedChild: boolean;
  /**
   * Pass the group data to the parent when collapsed.
   */
  @Event() didGroupClick: EventEmitter<any>;

  @Listen('didSelectedChange') ChildUpdated() {
    this.checkSelected();
  }

  checkSelected(){
    if (!this.collapsed) {
      console.log('not collapsed');
      this.selectedChild = false;
    } else {
      console.log('collapsed!');
      Array.from(
        this.el.querySelectorAll("se-list-item, se-list-group")
      ).forEach((item: any) => {
        if (item.selected || item.selectedChild) {
          this.selectedChild = true;
        }
      });
    }
  }

  private toggleCollapse(event: any) {
    if (this.option === 'treeview') {
      if (event.target.nodeName === 'SE-ICON') {
        this.collapsed = !this.collapsed;
      } else {
        this.didGroupClick.emit();
      }
    } else {
      this.collapsed = !this.collapsed;
      this.didGroupClick.emit();
    }
  }

  setButtonId() {
    let id = this.el.getAttribute('id');
    if (id) {
      let button = this.el.shadowRoot.querySelector('button');
      button.setAttribute('id', 'wc-' + id);
    } 
  }

  componentWillLoad() {
    Array.from(
      this.el.querySelectorAll("se-list-group > se-list-item, se-list-group > se-list-group")
    ).forEach((item: any) => {
      item.indentation = this.indentation + 1;
    });
  }

  componentDidLoad() {
    this.setButtonId();
  }

  render() {
    // The button section is a copy of the list item. External component cannot be used inside a component (DOM issue)
    return (
      <div class={['se-list-group', this.collapsed ? "collapsed" : '', this.option].join(' ')}>
        <button class={[this.selected ? "selected" : '', this.selectedChild ? "selectedChild" : ''].join(' ')} style={{ paddingLeft: `${20 * this.indentation}px` }} onClick={(event) => this.toggleCollapse(event)} disabled={!this.canCollapse}>
          {this.option === "nav" && this.selected && <div class="selectedBar"></div>}
          {!!this.icon ?
            <div class="nav-icon">
              <se-icon color={this.iconColor}>
                {this.icon}
              </se-icon>
            </div>
          : ''}
          <div class="nav-content">
            <div>{this.item}</div>
            <small> {this.description}</small>
          </div>
          {this.option === "treeview"
            ? <se-icon>{this.collapsed ? "arrow2_down" : "arrow2_right"}</se-icon>
            : <se-icon size="medium">{this.collapsed ? "arrow2_down" : "arrow2_up"}</se-icon>
          }
        </button>
        <div class="group-item">
          <slot/>
        </div>
      </div>
    )
  }
}
