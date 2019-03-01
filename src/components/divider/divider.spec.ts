import { DividerComponent } from './divider';

describe('divider', () => {
  let divider;

  beforeEach(() => {
    divider = new DividerComponent();
  });

  it('should build', () => {
    expect(divider).toBeTruthy();
  });

  it('should be in horizontal mode by default', () => {
    expect(divider.mode).toEqual('horizontal');
  });

  it('should be a light color by default', () => {
    expect(divider.color).toEqual('light');
  });
});
