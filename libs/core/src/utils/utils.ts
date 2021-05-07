export function getFullTitle(appTitle: string): any {
  let last = '';
  let first = '';
  if (appTitle && appTitle.length) {
    const titleArray = appTitle.split(' ');
    if (titleArray.length > 1) {
      last = titleArray.pop();
    }
    first = titleArray.length ? titleArray.join(' ') : '';
  }
  return {
    first,
    last,
  };
}

export function getFullCopyright(copyright: string): any {
  let last = '';
  let first = '';
  if (copyright && copyright.length) {
    const titleArray = copyright.split(' ©');
    if (titleArray.length > 1) {
      last = '©' + titleArray.pop();
    }
    first = titleArray.length ? titleArray.join(' ') : '';
  }
  return {
    first,
    last,
  };
}

export function isIE11(): boolean {
  return !!window['MSInputMethodContext'] && !!document['documentMode'];
}

export function isVisible(el, screenReader, recursed) {
  let style = void 0;
  const nodeName = el.nodeName.toUpperCase();
  const parent = el.parentNode;

  // 9 === Node.DOCUMENT
  if (nodeName === 'SE-LIST') {
    return true;
  }

  style = window.getComputedStyle(el, null);
  if (style === null) {
    return false;
  }

  const hasNoHeight = !el.offsetParent;
  const isDisplayNone = style.getPropertyValue('display') === 'none';
  const isInvisibleTag =
    nodeName.toUpperCase() === 'STYLE' || nodeName.toUpperCase() === 'SCRIPT';
  const srHidden = screenReader && el.getAttribute('aria-hidden') === 'true';
  const isInvisible =
    !recursed && style.getPropertyValue('visibility') === 'hidden';

  if (
    hasNoHeight ||
    isDisplayNone ||
    isInvisibleTag ||
    srHidden ||
    isInvisible
  ) {
    return false;
  }

  if (parent) {
    return isVisible(parent, screenReader, true);
  }

  return false;
}

export function debounce(func, timeout?: number) {
  let timer: any;
  return (...args: any[]) => {
    const next = () => func(...args);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(next, timeout > 0 ? timeout : 300);
  };
}

export function isTouchDevice() {
  return !!(
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window['DocumentTouch'] &&
        typeof document !== 'undefined' &&
        document instanceof window['DocumentTouch']))
  );
}
export function classNames(obj) {
  return Object.entries(obj)
    .filter(([_, isTruthy]) => isTruthy)
    .map(([className]) => className)
    .join(' ');
}

export function isNumber(number: number | string) {
  return (
    Number.isInteger(number) || new RegExp('^[0-9]*$').test(number as string)
  );
}
