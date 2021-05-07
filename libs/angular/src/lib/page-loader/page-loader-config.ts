import { TemplateRef } from '@angular/core';

/**
 * @description Configuration for showing the loader with PageLoaderService.
 */
export class PageLoaderConfig {
  /**
   * @description Defines the visual display of the loader.
   * `standard` is the default option, and displays a spinning green circle.
   * `dialog` gives the loading icon a look-and-feel that it is within a popup dialog box.
   */
  option?: string;
  /**
   * @description Defines the color of the loading spinner.
   */
  color?: string;
  /**
   * @descriptionDefines ig there is a dimming overlay effect on behind the loading spinner.
   */
  overlay?: boolean;
  /**
   * @description Defines if we want the loading to take the full page of the browser. default the browser will stay in the container.
   */
  fullPage?: boolean;
  /**
   * @description Defines the displayed message beneath the loader if set
   */
  message?: string | TemplateRef<any>;
}
