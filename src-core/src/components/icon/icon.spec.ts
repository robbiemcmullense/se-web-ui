import { IconComponent } from './icon';

describe('se-icon', () => {
  let icon;

  beforeEach(() => {
    icon = new IconComponent();
  });

  it('should build', () => {  
    expect(icon).toBeTruthy();
  });

  it('should be a small size by default', () => {
    expect(icon.size).toEqual('small');
  });
});
