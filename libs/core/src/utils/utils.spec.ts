import { getFullTitle, getFullCopyright } from './utils';

describe('format', () => {
  it('returns empty object', () => {
    const title = getFullTitle("");
    expect(title.first).toEqual('');
    expect(title.last).toEqual('');
  });

  it('formats just first names', () => {
    const title = getFullTitle("name");
    expect(title.first).toEqual('name');
    expect(title.last).toEqual('');
  });

  it('formats first and last names. last should only have one element', () => {
    const title = getFullTitle("long name test");
    expect(title.first).toEqual('long name');
    expect(title.last).toEqual('test');
  });

  it('formats first and last title name', () => {
    const title = getFullTitle("simple name");
    expect(title.first).toEqual('simple');
    expect(title.last).toEqual('name');
  });

  it('formats the copyright into two segments', () => {
    const copyright = getFullCopyright("my copyright. ©2020");
    expect(copyright.first).toEqual('my copyright.');
    expect(copyright.last).toEqual('©2020');
  });

  it('does not format the copyright when there is no copyright symbol', () => {
    const copyright = getFullCopyright("my copyright");
    expect(copyright.first).toEqual('my copyright');
    expect(copyright.last).toEqual('');
  });
});
