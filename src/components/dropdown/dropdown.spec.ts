import { DropdownComponent } from './dropdown';

describe('DropdownComponent', () => {
  let dropdown;

  beforeEach(() => {
    dropdown = new DropdownComponent();
  });

  it('should build', () => {
    expect(dropdown).toBeTruthy();
  });

});
