import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

export function appInitialize() {
  return (): any => {
    return applyPolyfills().then(() => {
      return defineCustomElements();
    });
  };
}
