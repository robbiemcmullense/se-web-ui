
export function getFullTitle(appTitle: string): any {
  let last = '';
  let first = '';
  if(appTitle && appTitle.length) {
    const titleArray = appTitle.split(" ");
    if(titleArray.length > 1){
      last = titleArray.pop();
    }
    first = titleArray.length ? titleArray.join(" ") : '';
  }
  return {
    first,
    last
  };
}
