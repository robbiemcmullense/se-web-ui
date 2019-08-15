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
  
  it('should render', async() => {
    const page = await newSpecPage({
      components: [SliderComponent],
      html: `<se-slider></se-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <se-slider>
        <mock:shadow-root>
          <div class="slider-container">
            <input type="range" min="" max="100" value="" />
          </div>
        </mock:shadow-root>
      </se-slider>
    `);
  });
});
