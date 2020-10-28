import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  Element,
  Watch,
  Listen,
  Host,
  Method,
  State,
} from '@stencil/core';
import arrow2Down from '@se/icons/svg/arrow2_down.svg';
import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import arrow2Right from '@se/icons/svg/arrow2_right.svg';

export interface GroupCollapseEvent {
  collapsed: boolean;
}

@Component({
  tag: 'se-list-group',
  styleUrl: 'list-group.scss',
  shadow: true,
})
export class ListGroupComponent {
  private groupItem?: HTMLElement;
  private listItem?: HTMLSeListItemElement;
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
  @Prop({ mutable: true }) indentation = 1;

  /**
   * Disable the item for any interaction.
   */
  @Prop() disabled: boolean;

  /**
   * Defines if list groups can be collapsed, true by default.
   */
  @Prop() canCollapse = true;
  @State() selectedChild: boolean;
  /**
   * Emitted when the group item is clicked.
   */
  @Event() didGroupClick: EventEmitter<boolean>;

  /**
   * Emitted when the group item is collapsed/uncollapsed.
   */
  @Event() didGroupCollapse: EventEmitter<GroupCollapseEvent>;

  @Listen('didSelectedChange') ChildUpdated() {
    this.checkSelected();
  }

  @Method()
  async toggleCollapseTreeview() {
    this.toggleItems();
  }

  @Method()
  async focusElement() {
    this.listItem.focusElement();
  }

  @State() isTreeview: boolean;

  @Method()
  async setOption(option) {
    this.isTreeview = option === 'treeview';
  }

  private checkSelected() {
    if (!this.collapsed) {
      this.selectedChild = false;
    } else {
      // TODO: make sure it work if we have a list inside a list...
      Array.from(
        this.el.querySelectorAll('se-list-item, se-list-group')
      ).forEach((item: any) => {
        if (item.selected || item.selectedChild) {
          this.selectedChild = true;
          return;
        }
      });
    }
  }

  private toggleGroupButton() {
    if (!this.isTreeview) {
      this.toggleItems();
    } else if (this.listItem) {
      this.listItem.blurElement();
    }
    this.didGroupClick.emit(true);
  }

  private toggleItems() {
    this.collapsed = !this.collapsed;
    this.didGroupCollapse.emit({ collapsed: this.collapsed });
  }

  getClosestParent(selector) {
    return this.el.parentElement && this.el.parentElement.closest(selector);
  }

  getParentConfig() {
    const closestList: HTMLSeListElement = this.getClosestParent('se-list');
    if (closestList?.option) {
      this.isTreeview = closestList.option === 'treeview';
    }
    const closestGroup: HTMLSeListGroupElement = this.getClosestParent(
      'se-list, se-list-group'
    );
    if (closestGroup?.indentation) {
      this.indentation = closestGroup.indentation + 1;
    }
  }
  componentWillLoad() {
    this.getParentConfig();
    this.checkSelected();
  }
  componentDidLoad() {
    this.groupItem.style.setProperty(
      '--se-list-group-indentation',
      `${this.indentation}`
    );
  }
  render() {
    let title = this.item;
    if (!!this.description as boolean) {
      title = `${title}, ${this.description}`;
    }
    const id = this.el.getAttribute('id');
    return (
      <Host role="listitem">
        <se-list-item
          id={id ? `group-${id}` : null}
          ref={el => (this.listItem = el)}
          aria-expanded={this.collapsed}
          onClick={() => this.toggleGroupButton()}
          class={{
            selectedChild: this.selectedChild,
          }}
          selected={this.selectedChild || this.selected}
          disabled={this.disabled}
          icon={this.icon}
          title={title}
          description={this.description}
          item={this.item}
        >
          {this.isTreeview ? (
            <se-icon
              slot="start"
              class="treeview-icon"
              size="medium"
              color="standard"
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleCollapseTreeview();
              }}
            >
              <span
                innerHTML={this.collapsed ? arrow2Right : arrow2Down}
              ></span>
            </se-icon>
          ) : (
            ''
          )}

          {/* Pass down the slot to the child */}
          <slot name="start" slot="start"></slot>
          <slot name="icon" slot="icon"></slot>
          <slot name="item" slot="item"></slot>
          <slot name="description" slot="description"></slot>
          <slot name="end" slot="end"></slot>

          {!this.isTreeview && this.canCollapse ? (
            <se-icon slot="end" size="medium" color="standard">
              <span innerHTML={this.collapsed ? arrow2Down : arrow2Up}></span>
            </se-icon>
          ) : (
            ''
          )}
        </se-list-item>
        <div
          ref={el => (this.groupItem = el)}
          role="list"
          class={{ 'group-item': true, collapsed: this.collapsed }}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
