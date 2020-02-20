import { Component, Host, h, Prop, Element, Watch, Event, EventEmitter, State } from "@stencil/core";
import arrow2_right from "@se/icons/svg/arrow2_right.svg";

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
  @Prop() indentation = 0;
  /**
   * Defines the style of the list. The default setting is `classic`, and the style will be handled and modified by the parent element.
   */
  @Prop({mutable: true}) option: "nav" | "classic" | "dropdown" | "treeview" | "headline";
  /**
   * Determines if se-item configures an `a` tag with an `href` attibute.
   * Default when href is blank configures as a `button` tag.
   */
  @Prop() href: string;

  /**
   * Event emitted to notify the list-group component that the selected state has changed.
   */
  @Event() didSelectedChange: EventEmitter<void>;
  @Watch('selected') SelectedDidChange() {
    this.didSelectedChange.emit();
  }

  @State() innerId;

  setButtonId() {
    const id = this.el.getAttribute('id');
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
    let title = this.item;

    if (!!this.description) {
      myDescription = <small>{this.description}</small>;
      title = `${title}, ${this.description}`;
    };
    const TagType = this.href === undefined ? 'button' : 'a' as any;
    const attrs = (TagType === 'a') ? { href : this.href } : {};

    const icon = this.option !== "treeview" ?
      <se-icon color={this.iconColor}>
        {this.icon}
      </se-icon>
      :
      this.indentation !== 0 ?
        <se-icon color={this.iconColor} style={{ paddingLeft: `8px` }}>
          {this.icon}
        </se-icon>
        :
        <se-icon color={this.iconColor}>
          {this.icon}
        </se-icon>
      ;

    const padding = this.option !== "treeview" ? 20 : 24;

    return (
      <Host role="listitem">
          <TagType
            {...attrs}
            title={title}
            class={{ "selected": this.selected, ["button"] : true, [this.option] : true, ["se-list-item"] : true }}
            style={{ paddingLeft: `${padding * this.indentation}px`}}
            id={this.innerId} >
            {(this.option === "nav" && this.selected) ? <div class="selectedBar"></div> : ''}
            <div class="nav-icon">
              {!!this.icon ? icon : ''}
              <slot name="icon"></slot>
            </div>
            <div class="nav-content">
              <div class="list-item-label">{this.item}</div>
              {myDescription}
            </div>
            <slot></slot>
            {this.option === "nav" ? <se-icon size="medium"><span innerHTML={arrow2_right}></span></se-icon> : ''}
          </TagType>
      </Host>
    )
  }
}
