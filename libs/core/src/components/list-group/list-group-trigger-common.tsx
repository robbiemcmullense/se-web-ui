import { h } from '@stencil/core';
import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import { ListGroupTriggerProps } from './types';

export const ListGroupTriggerCommon = (
  props: ListGroupTriggerProps,
  children: HTMLElement
): HTMLSeListItemElement => (
  <se-list-item {...props}>
    {children}

    {props.canCollapse && (
      <se-icon
        slot="end"
        color="standard"
        size="micro"
        rotate={props.collapsed ? 180 : 0}
      >
        <span innerHTML={arrow2Up} />
      </se-icon>
    )}
  </se-list-item>
);
