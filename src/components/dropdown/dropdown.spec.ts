import { DropdownComponent } from './dropdown';

describe('DropdownComponent', () => {
  let divider;

  beforeEach(() => {
    divider = new DropdownComponent();
  });

  it('should build', () => {
    expect(divider).toBeTruthy();
  });

});
