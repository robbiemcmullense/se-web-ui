import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  Watch,
  Element,
  Listen,
  Host,
  Method
} from '@stencil/core';
import arrow2Down from '@se/icons/svg/arrow2_down.svg';
import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import arrow2Right from '@se/icons/svg/arrow2_right.svg';

@Component({
  tag: 'se-list-group',
  styleUrl: 'list-group.scss',
  shadow: true
})
export class ListGroupComponent {
  private buttonElm?: HTMLElement;
  private paddingIndentation = 24;
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
  @Prop() iconColor: 'primary' | 'secondary';
  /**
   * Defines if the item group is collapsed/closed. The default setting is `false`.
   */
  @Prop({ mutable: true }) collapsed = false;
  @Watch('collapsed') collapsedChanged() {
    this.checkSelected();
  }
  /**
   * Defines the group indentation to add paddings to the list item (used with multiple list groups).
   */
  @Prop({ mutable: true }) indentation = 0;
  /**
   * Defines the style of the list. The default setting is `classic`, and the style will be handled and modified by the parent element.
   */
  @Prop({ mutable: true }) option:
    | 'nav'
    | 'classic'
    | 'dropdown'
    | 'treeview'
    | 'headline';
  /**
   * Defines if list groups can be collapsed, true by default.
   */
  @Prop() canCollapse = true;
  @Prop({ mutable: true }) selectedChild: boolean;
  /**
   * Emitted when the group item is clicked.
   */
  @Event() didGroupClick: EventEmitter<any>;

  /**
   * Emitted when the group item is collapsed/uncollapsed.
   */
  @Event() didGroupCollapse: EventEmitter<any>;

  @Listen('didSelectedChange') ChildUpdated() {
    this.checkSelected();
  }

  @Method()
  async toggleCollapseTreeview() {
    this.toggleItems();
  }

  @Method()
  async focusElement() {
    this.buttonElm.focus();
  }

  private hasIcon: boolean;

  private checkSelected() {
    if (!this.collapsed) {
      this.selectedChild = false;
    } else {
      Array.from(
        this.el.querySelectorAll('se-list-item, se-list-group')
      ).forEach((item: any) => {
        if (item.selected || item.selectedChild) {
          this.selectedChild = true;
        }
      });
    }
  }

  private toggleGroupButton() {
    if (this.option !== 'treeview') {
      this.toggleItems();
    } else {
      this.buttonElm && this.buttonElm.blur()
    }
    this.didGroupClick.emit();
  }

  private toggleItems(){
    this.collapsed = !this.collapsed;
    this.didGroupCollapse.emit({ collapsed: this.collapsed });
  }


  getClosestParent() {
    // get the closest between se-list or se-list-group
    return this.el.parentElement && this.el.parentElement.closest('se-list, se-list-group');
  }

  getParentConfig() {
    const closest: any = this.getClosestParent() || {};
    const indentation = closest.indentation;
    if (indentation !== null && indentation !== undefined) {
      this.indentation = indentation + 1;
    }
    if (closest.option) {
      this.option = closest.option;
    }
  }

  componentWillLoad() {
    this.getParentConfig();
    this.hasIcon = !!this.icon || !!this.el.querySelector('[slot="icon"]');
  }


  render() {
    let title = this.item;
    let myDescription = null;
    if (!!this.description as boolean) {
      myDescription = <small>{this.description}</small>;
      title = `${title}, ${this.description}`;
    }

    const id = this.el.getAttribute('id');
    // The button section is a copy of the list item. External component cannot be used inside a component (DOM issue)
    return (

      <Host role="listitem" option={this.option}>
        <button
          aria-expanded={this.collapsed}
          title={title}
          id={id ? `wc-${id}` : ''}
          ref={el => (this.buttonElm = el)}
          class={{
            'se-list-group': true,
            [this.option]: !!this.option,
            button: true,
            collapsed: this.collapsed,
            selected: this.selected,
            selectedChild: this.selectedChild
          }}
          style={{
            paddingLeft: `${this.paddingIndentation * this.indentation}px`
          }}
          onClick={() => this.toggleGroupButton()}
          disabled={!this.canCollapse}>
          {(this.selected || this.selectedChild) && (
            <div class="selectedBar"></div>
          )}
          {this.option === 'treeview' ? (
            <se-icon
              class="treeview-collapse-icon"
              color="standard"
              onClick={(e) => {
                e.stopPropagation();
                this.toggleCollapseTreeview();
              }}>
              <span
                innerHTML={this.collapsed ? arrow2Right : arrow2Down}
              ></span>
            </se-icon>
          ) : (
            ''
          )}
          {this.hasIcon && (
            <div class="nav-icon">
              {this.icon && (
                <se-icon color={this.iconColor}>{this.icon}</se-icon>
              )}
              <slot name="icon"></slot>
            </div>
          )}
          <div class="nav-content">
            <div class="list-group-label">{this.item}</div>
            {myDescription}
          </div>
          {this.option !== 'treeview' && this.canCollapse ? (
            <se-icon size="medium" color="standard">
              <span innerHTML={this.collapsed ? arrow2Down : arrow2Up}></span>
            </se-icon>
          ) : (
            ''
          )}
        </button>
        <div role="list" class={{'group-item': true, [this.option]: !!this.option}}>
          <slot />
        </div>
      </Host>
    );
  }
}
