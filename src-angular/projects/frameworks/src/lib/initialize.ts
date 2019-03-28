import { defineCustomElements } from '@se/web-ui/loader';

export function appInitialize(doc: Document) {
  return (): any => {
    const win = doc.defaultView as any;
    if (win) {
      return defineCustomElements(win);
    }
  };
}
