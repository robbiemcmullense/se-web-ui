/**
 * @description Configuration for opening dialog with the DialogService.
 */
export class DialogConfig {
  /**
   * @description title for the dialog
   */
  title?: string;
  /**
   * @description message/content for the dialog
   */
  message?: string;
  /**
   * @description icon value is passed to display in the content area
   */
  icon?: string;
  /**
   * @description OK button text for the dialog
   */
  textOK?: string;
  /**
   * @description Cancel button text for the dialog
   */
  textCancel?: string;
  /**
   * @description Flip the confirm action buttons order in the footer. default: false
   */
  flipConfirmActions?: boolean;
  /**
   * @description size of the dialog: 'small'|'large'|'medium'|'fill'
   */
  size?: string;
  /**
   * @description color of the dialog header: 'standard'|'alternative'|'primary'|'secondary'|'information'
   */
  color?: string;
  /**
   * @description icon color for the dialog if the icon is present: 'standard'|'alternative'|'primary'|'secondary'|'information'
   */
  iconColor?: string;
  /**
   * @description padding for the dialog header:'small' | 'large'
   */
  headerPadding?: string;
  /**
   * @description padding for the dialog content:'none' | 'small' | 'large'
   */
  contentPadding?: string;
  /**
   * @description option to enable click on backdrop (`true`) or (`false`).  Default setting is `true`.
   * @deprecated use noBackdrop instead
   */
  canBackdrop?: boolean;
  /**
   * @description option to enable click on backdrop.  Default setting is `false`.
   */
  noBackdrop?: boolean;
  /**
   * @description option to pass any data to the custom dialog component.
   */
  data?: any;
}
