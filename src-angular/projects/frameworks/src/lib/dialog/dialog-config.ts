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
   * @description size of the dialog:'small'|'large'|'medium'|'fill'
   */
  size?: string;
  /**
   * @description color of the dialog header:'alternative'|'primary'
   */
  color?: string;
  /**
   * @description icon color for the dialog if the icon is present:'alternative'|'primary'|'standard'|'secondary'
   */
  iconColor?: string;
  /**
   * @description option for the dialog by removing the padding&margin before and after the content
   */
  option?: string;
}
