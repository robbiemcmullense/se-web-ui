import { Component, h, Prop, Element, State, Watch, Event, EventEmitter } from "@stencil/core";

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
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" | "headline" = "classic";

  @State() padding: number;
  /**
   * Event emitted to notify the list-group component that the selected state has changed.
   */
  @Event() didSelectedChange: EventEmitter<void>;

  @Watch('selected') SelectedDidChange() {
    this.didSelectedChange.emit()
  }

  setButtonId() {
    let id = this.el.getAttribute('id');
    if (id) {
      let button = this.el.shadowRoot.querySelector('button');
      button.setAttribute('id', 'wc-' + id);
    }
  }

  // Must use DidLoad, if trying to do view load, parent is not setup yet
  componentDidLoad() {
    // Disable typescript below (@ts-ignore), but we should be doing this.el.parentElement as ListGroupComponent
    // but cannot get the import to work for it.

    // ListGroupComponent need to be imported


    /*
    // if a parent can be different than a ListGroupComponent
    const parentItem = this.el.parentElement as ListGroupComponent
    // If we dont typecast this then we cannot access .indentation because we get
    // an HTMLElement which doesnt have .indentation, but ListGroupComponent does.

    if(parentItem.indentation !== null && parentItem.indentation !== undefined) {
      this.indentation = this.parentItem.indentation + 1;
    } */

    // @ts-ignore  
    const indentation = this.el.parentElement.indentation;

    // console.log('parent indentation: ', indentation);
    if(indentation !== null && indentation !== undefined) {
      this.indentation = indentation + 1;
      //console.log('indentation is', this.indentation)
    }
    // } else {
    //   console.log('this shouldnt print out unless parent indentation is undefined');
    // }

    this.setButtonId();
    this.padding = 20 * this.indentation;
  }

  render() {
    return (
      <div class={['se-list-item', this.option].join(' ')}>
        <button class={{ "selected": this.selected }} style={{ paddingLeft: `${this.padding}px` }}>
          {(this.option === "nav" && this.selected) ? <div class="selectedBar"></div> : ''}
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
          {this.option === "nav" ? <se-icon size="medium">arrow2_right</se-icon> : ''}
          {this.option === "classic" ? <slot></slot> : ''}
        </button>
      </div>
    )
  }
}
