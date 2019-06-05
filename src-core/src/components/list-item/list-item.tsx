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
   * Defines the description of the item. placed under its title.
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
   * Define the theme of the list. This them will be handled and modified by the parent element.
   */
  @Prop() option: "nav" | "classic" | "dropdown" | "treeview" | "headline" = "classic";
  @State() padding: number;
  /**
   * Event emitted to notify the item-group that the selected state has changed.
   */
  @Event() didSelectedChange: EventEmitter<void>;

  @Watch('selected') SelectedDidChange(){
    this.didSelectedChange.emit()
  }

  componentDidLoad() {
    this.padding = 20 * this.indentation;
    if (this.option === "treeview") {
      this.padding += 24;
    }
  }

  render() {
    return (
      <Host class={[this.selected ? "selected" : '', this.option].join(' ')}>
        <button style={{ paddingLeft: `${this.padding}px` }}>
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
          {this.option === "nav" && <se-icon  size="medium">arrow2_right</se-icon>}
          {this.option === "classic" && <slot></slot>}
        </button>
      </Host>
    )
  }
}
