import { SliderComponent } from './slider';
import { newSpecPage } from '@stencil/core/testing';

describe('SliderComponent', () => {
  let slider;

  beforeEach(() => {
    slider = new SliderComponent();
  });

  it('should build', () => {
    expect(slider).toBeTruthy();
  });


  it('disbaled value should be true when the setDisabled method is called', () => {
    slider.setDisabled(true);
    expect(slider.disabled).toBeTruthy();
  });

  it('should render with an input element', async () => {
    const page = await newSpecPage({
      components: [SliderComponent],
      html: `<se-slider></se-slider>`,
    });
    expect(page.root.shadowRoot.querySelector('input')).toBeTruthy();
  });

  it('should set the sliderElement value to the specified input and call the setSliderPosition function when the component loads', () => {
    slider.value = 30;
    slider.sliderElement = {
      value: '',
      style: { setProperty: jest.fn() },
      addEventListener: jest.fn(),
    };
    const eventSpy = jest.spyOn(slider, 'setSliderPosition');
    slider.componentDidLoad();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should emit the didChange event when the slider value changes', () => {
    const eventSpy = jest.spyOn(slider.didChange, 'emit');
    slider.sliderElement = { addEventListener: jest.fn() };
    slider.handleEvent(); // slider value changes from user interaction
    expect(eventSpy).toHaveBeenCalled();
  });
});
