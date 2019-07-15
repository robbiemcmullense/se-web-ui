import { Component, h, Host, Prop, Element, State, Watch, Event, EventEmitter} from "@stencil/core";

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

  @Watch('selected') SelectedDidChange(){
    this.didSelectedChange.emit()
  }

  setButtonId() {
    let id = this.el.getAttribute('id');
    if (id) {
      let button = this.el.shadowRoot.querySelector('button');
      button.setAttribute('id', 'wc-' + id);
    } 
  }

  componentDidLoad() {
    this.setButtonId();
    this.padding = 20 * this.indentation;
  }

  render() {
    return (
      <Host class={this.option}>
        <button class={{"selected": this.selected}} style={{ paddingLeft: `${this.padding}px` }}>
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
      </Host>
    )
  }
}
