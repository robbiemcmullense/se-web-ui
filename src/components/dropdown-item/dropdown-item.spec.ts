import { DropdownItemComponent } from './dropdown-item';

describe('dropdownItemComponent', () => {
  let divider;

  beforeEach(() => {
    divider = new DropdownItemComponent();
  });

  it('should build', () => {
    expect(divider).toBeTruthy();
  });

});
