import { Component, h, Prop, Element, Watch, Event, EventEmitter, State } from "@stencil/core";

@Component({
  tag: "se-list-item",
  styleUrl: "list-item.scss",
  shadow: true
})
export class ListItemComponent {

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
   * Defines if the list element should be selected or not.
   */
  @Prop() selected: boolean;
  /**
   * Places an icon on the left side of the item list.
   */
  @Prop() icon: string;
  /**
   * Optional property to define the color of the icon. The default color will be inherited from it's parent.
   */
  @Prop() iconColor: "standard" | "alternative" | "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Defines the group indentation to add paddings to the list item (used with multiple list groups).
   */
  @Prop() indentation: number = 0;
  /**
   * Defines the style of the list. The default setting is `classic`, and the style will be handled and modified by the parent element.
   */
  @Prop({mutable: true}) option: "nav" | "classic" | "dropdown" | "treeview" | "headline";

  /**
   * Event emitted to notify the list-group component that the selected state has changed.
   */
  @Event() didSelectedChange: EventEmitter<void>;

  @Watch('selected') SelectedDidChange() {
    this.didSelectedChange.emit()
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
    let myDescription = null;
    if (!!this.description) {
      myDescription = <small>{this.description}</small>
    };
    return (
      <div class={['se-list-item', this.option].join(' ')}>
        <button class={{ "selected": this.selected }} style={{ paddingLeft: `${20 * this.indentation}px` }} id={this.innerId} >
          {(this.option === "nav" && this.selected) ? <div class="selectedBar"></div> : ''}
          {!!this.icon ?
            <div class="nav-icon">
              <se-icon color={this.iconColor}>
                {this.icon}
              </se-icon>
            </div>
            : ''}
          <div class="nav-content">
            <div class="list-label-item" title={this.item}>{this.item}</div>
            {myDescription}
          </div>
          {this.option === "nav" ? <se-icon size="medium">arrow2_right</se-icon> : ''}
          {this.option === "classic" ? <slot></slot> : ''}
        </button>
      </div>
    )
  }
}
