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
import { ListGroupTriggerFilter } from './list-group-trigger-filter';
import { ListGroupTriggerCommon } from './list-group-trigger-common';
import { ListGroupTriggerTreeview } from './list-group-trigger-treeview';
import { listOption } from '../list/constants';
import { ListOption } from '../list/types';

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
   * define the flex behavior of the group
   */
  @Prop() flex: number;
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

  @State()
  option: ListOption;

  @Method()
  async setOption(option: ListOption) {
    this.option = option;
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
    if (this.option !== listOption.TREEVIEW) {
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
      this.option = closestList.option;
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

    const Tag = ((option: ListOption) => {
      if (option === listOption.TREEVIEW) {
        return ListGroupTriggerTreeview;
      }

      if (option === listOption.FILTER) {
        return ListGroupTriggerFilter;
      }

      return ListGroupTriggerCommon;
    })(this.option);

    return (
      <Host
        role="listitem"
        style={{ flex: `${!this.collapsed && this.flex ? this.flex : 0}` }}
      >
        <Tag
          id={id ? `group-${id}` : null}
          ref={el => (this.listItem = el)}
          aria-expanded={this.collapsed}
          onClick={() => this.toggleGroupButton()}
          class={{
            selectedChild: !this.selected && this.selectedChild,
            disabled: this.disabled,
            'list-group-trigger': true,
          }}
          selected={this.selectedChild || this.selected}
          disabled={this.disabled}
          icon={this.icon}
          title={title}
          description={this.description}
          item={this.item}
          collapsed={this.collapsed}
          canCollapse={this.canCollapse}
          toggleCollapseTreeview={
            this.option === 'treeview' && this.toggleCollapseTreeview.bind(this)
          }
        >
          {/* Pass down the slot to the child */}
          <slot name="start" slot="start" />
          <slot name="icon" slot="icon" />
          <slot name="item" slot="item" />
          <slot name="description" slot="description" />
          <slot name="end" slot="end" />
        </Tag>
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
