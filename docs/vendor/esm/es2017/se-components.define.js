
// SeComponents: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './se-components.core.js';
import { COMPONENTS } from './se-components.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
