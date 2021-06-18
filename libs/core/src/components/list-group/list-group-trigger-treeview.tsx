import { h } from '@stencil/core';
import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import { ListGroupTriggerProps } from './types';

export const ListGroupTriggerTreeview = (
  props: ListGroupTriggerProps,
  children: HTMLElement
): HTMLSeListItemElement => (
  <se-list-item {...props}>
    <se-icon
      slot="start"
      class="treeview-icon"
      color="standard"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        props.toggleCollapseTreeview();
      }}
      rotate={props.collapsed ? 90 : 180}
      innerHTML={arrow2Up}
    >
    </se-icon>

    {children}
  </se-list-item>
);
