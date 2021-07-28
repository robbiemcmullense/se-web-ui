import { InjectionToken } from '@angular/core';

/** Injection token defined by the SeWebModule to set config overrides */
export const WEB_MODULE_CONFIG = new InjectionToken<WebModuleConfig>('WebModuleConfig');

export interface WebModuleConfig {
  /**
   * if true, the flipConfirmActions flag will be inverted, so true becomes false, and false becomes true
   */
  invertConfirmActions?: boolean;
}

export const defaultConfig: WebModuleConfig = {
  invertConfirmActions: false
};
