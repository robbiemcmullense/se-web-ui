import { DropdownComponent } from './dropdown';

describe('DropdownComponent', () => {
  let dropdown;

  beforeEach(() => {
    dropdown = new DropdownComponent();
  });

  it('should build', () => {
    expect(dropdown).toBeTruthy();
  });

  it('should be left aligned by default', () => {
    expect(dropdown.alignment).toEqual('left');
  });

  it('should not be open when loaded', () => {
    expect(dropdown.opened).toBeFalsy();
  });
});
