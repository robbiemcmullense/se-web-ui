import { SliderComponent } from './slider';
import { newSpecPage } from '@stencil/core/testing';
import { setMaxListeners } from 'cluster';

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
    expect(slider.disabled).toBeFalsy();
  });

  it('disbaled value should be true when the setDisabled method is called', () => {
    slider.setDisabled(true);
    expect(slider.disabled).toBeTruthy();
  });
  
  it('should render with an input element', async() => {
    const page = await newSpecPage({
      components: [SliderComponent],
      html: `<se-slider></se-slider>`,
    });
    expect(page.root.shadowRoot.querySelector('input')).toBeTruthy();
  });

  it('should emit the didChange event when the slider value changes', () => {
    const eventSpy = jest.spyOn(slider.didChange, 'emit');
    slider.sliderElement = {addEventListener: jest.fn()};
    slider.handleEvent(); // slider value changes from user interaction
    expect(eventSpy).toHaveBeenCalled();
  });
});
