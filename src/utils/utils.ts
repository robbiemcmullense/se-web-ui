
export function getFullTitle(appTitle: string): any {
  let last = '';
  let first = '';
  if(appTitle.length) {
    const titleArray = appTitle.split(" ");
    last= titleArray.pop();
    first = titleArray.length ? titleArray.join(" ") : '';
  }

  return {
    first,
    last
  };
}
