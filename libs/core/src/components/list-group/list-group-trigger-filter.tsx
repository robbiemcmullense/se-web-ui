import { h } from '@stencil/core';
import { ListGroupTriggerProps } from './types';

export const ListGroupTriggerFilter = (
  props: ListGroupTriggerProps,
  children: HTMLElement
): HTMLSeListItemElement => {
  const { item, ...restProps } = props;

  return (
    <se-list-item {...restProps}>
      <div
        slot="start"
        class={{
          'list-group-trigger-icon': true,
          'list-group-trigger-icon--collapsed': props.collapsed,
        }}
      />

      <div class="list-group-trigger-body" slot="item">
        {item}
      </div>

      {children}
    </se-list-item>
  );
};
