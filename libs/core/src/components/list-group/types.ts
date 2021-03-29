export interface ListGroupTriggerProps {
  id: string;
  ref: (el: HTMLSeListItemElement) => void;
  ariaExpanded?: boolean;
  onClick: () => void;
  class: Record<string, boolean>;
  selected: boolean;
  disabled: boolean;
  icon: string;
  title: string;
  description: string;
  item: string;
  canCollapse: boolean;
  collapsed: boolean;
  toggleCollapseTreeview?: () => void;
}
