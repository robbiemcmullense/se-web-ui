import { Component, h, Prop, Element, Watch, Event, EventEmitter } from "@stencil/core";

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

  getParentConfig() {
    const myParent: any = this.el.parentElement;
    if(!!myParent) {
      const indentation = myParent.indentation;
      if(indentation !== null && indentation !== undefined) {
        this.indentation = indentation + 1;
        // console.log("parent has indentation is", myParent.indentation, "so I add to it for a total of", this.indentation);
      }
      if(myParent.option) {
        // console.log("Setting as parent's option");
        this.el.setAttribute("option", myParent.option);
      } else {
        this.el.setAttribute("option", this.option);
      }
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
    const myParent: any = this.el.parentElement;
    return (
      <div class={['se-list-item', this.option ? this.option : myParent.option].join(' ')}>
        <button class={{ "selected": this.selected }} style={{ paddingLeft: `${20 * this.indentation}px` }} >
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
            {myDescription}
          </div>
          {this.option === "nav" ? <se-icon size="medium">arrow2_right</se-icon> : ''}
          {this.option === "classic" ? <slot></slot> : ''}
        </button>
      </div>
    )
  }
}
