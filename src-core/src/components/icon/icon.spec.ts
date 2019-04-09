import { IconComponent } from './icon';

describe('se-icon', () => {
  let icon;

  beforeEach(() => {
    icon = new IconComponent();
  });

  it('should build', () => {  
    expect(icon).toBeTruthy();
  });
});
