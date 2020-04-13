import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';

export function appInitialize(doc: Document) {
  return (): any => {
    return applyPolyfills().then(() => {
      return defineCustomElements();
    });
  };
}
