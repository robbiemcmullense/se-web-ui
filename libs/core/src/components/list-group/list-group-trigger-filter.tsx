import { h } from '@stencil/core';
import { ListGroupTriggerProps } from './types';

export const ListGroupTriggerFilter = (
  props: ListGroupTriggerProps,
  children: HTMLElement
): HTMLSeListItemElement => (
  <se-list-item {...props}>
    <div
      slot="start"
      class={{
        'list-group-trigger-icon': true,
        'list-group-trigger-icon--collapsed': props.collapsed,
      }}
    />

    {children}
  </se-list-item>
);
