import { SliderComponent } from './slider';

describe('SliderComponent', () => {
  let slider;

  beforeEach(() => {
  slider = new SliderComponent();
  });

  it('should build', () => {
    expect(slider).toBeTruthy();
  });

  it('minimum value should be 0 default', () => {
    expect(slider.min).toEqual(0);
  });

  it('maximum value should be 100 by default', () => {
    expect(slider.max).toEqual(100);
  });

  it('disbaled value should be false by default', () => {
    expect(slider.disbaled).toBeFalsy();
  });
  it('disbaled value should be true when we set default as true', () => {
    slider.disbaled = true;
    expect(slider.disbaled).toBeTruthy();
  });
  
});
