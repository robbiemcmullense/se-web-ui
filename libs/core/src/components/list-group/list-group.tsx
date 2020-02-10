import { Component, Event, EventEmitter, h, Prop, Watch, Element, Listen, Host, State } from "@stencil/core";
import arrow2_down from "@se/icons/svg/arrow2_down.svg";
import arrow2_up from "@se/icons/svg/arrow2_up.svg";
import arrow2_right from "@se/icons/svg/arrow2_right.svg";


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
  @Prop({mutable: true}) option: "nav" | "classic" | "dropdown" | "treeview" | "headline";
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
      this.selectedChild = false;
    } else {
      Array.from(
        this.el.querySelectorAll("se-list-item, se-list-group")
      ).forEach((item: any) => {
        if (item.selected || item.selectedChild) {
          this.selectedChild = true;
        }
      });
    }
  }

  private toggleCollapse() {
    if (this.option !== 'treeview') {
      this.collapsed = !this.collapsed;
      this.didGroupClick.emit();
    }
  }
  private toggleCollapseTreeview() {
    // called only from treeview
    this.collapsed = !this.collapsed;
    this.didGroupClick.emit();
  }

  @State() innerId;

  setButtonId() {
    let id = this.el.getAttribute('id');
    if (id) {
      this.innerId = `wc-${id}`;
    }
  }

  getClosestParent() {
    const closestGroup = this.el.parentElement.closest("se-list-group");
    const closestList = this.el.parentElement.closest("se-list");
    return !closestGroup ? closestList : closestGroup;
  }

  getParentConfig() {
    const closest:any = this.getClosestParent() || {};
    const indentation = closest.indentation;
    if(indentation !== null && indentation !== undefined) {
      this.indentation = indentation + 1;
    }
    if(closest.option) {
      this.option = closest.option;
    }
  }

  componentWillLoad() {
    this.getParentConfig();
  }

  componentDidLoad() {
    this.setButtonId();
  }

  render() {
    let title = this.item;

    let myDescription = null;
    if (!!this.description) {
      myDescription = <small>{this.description}</small>;
      title = `${title}, ${this.description}`;

    }
    // The button section is a copy of the list item. External component cannot be used inside a component (DOM issue)
    return (
      <Host role="listitem" option={this.option} >
        <button aria-expanded={`${this.collapsed}`} title={title} id={this.innerId} class={['se-list-group', this.option, this.collapsed ? "collapsed" : '', this.option, this.selected ? "selected" : '', this.selectedChild ? "selectedChild" : '', "button"].join(' ')} style={{ paddingLeft: `${20 * this.indentation}px` }} onClick={() => this.toggleCollapse()} disabled={!this.canCollapse}>
          {this.option === "nav" && this.selected && <div class="selectedBar"></div>}
          {this.option === 'treeview' ? <se-icon class="treeview-collapse-icon" onClick={() => this.toggleCollapseTreeview()} style={{ paddingLeft: `calc(${8 * this.indentation}px)`}}><span innerHTML={this.collapsed ? arrow2_right : arrow2_down}></span></se-icon> : ''}
          {!!this.icon ?
            <div class="nav-icon">
              { this.icon && <se-icon color={this.iconColor}>{this.icon}</se-icon> }
              <slot name="icon"></slot>
            </div>
          : ''}
          <div class="nav-content">
            <div class="list-group-label">{this.item}</div>
            {myDescription}
          </div>
          {this.option !== "treeview" && this.canCollapse
            ? <se-icon class="standard-collapse-icon" size="medium"><span innerHTML={this.collapsed ? arrow2_down : arrow2_up}></span></se-icon>
            : ''
          }
        </button>
        <div role="list" class={["se-list-group", "group-item", this.option].join(' ')}>
          <slot/>
        </div>
      </Host>
    )
  }
}
