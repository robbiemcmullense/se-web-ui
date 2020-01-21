import { Component, Element, h, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'se-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class SliderComponent {
  sliderElement?: HTMLInputElement;
  @Element() el: HTMLElement;
  /**
   * Indicates the initial value of your slider component when it loads.
   * The default value is `0`.
   */
  @Prop() value: any = 0;
  /**
  * Indicates the minimum value of your slider.
  * The default value is `0`.
  */
  @Prop() min: number = 0;
  /**
  * Indicates the maximum value of your slider.
  * The default value is `100`.
  */
  @Prop() max: number = 100;
  /**
  * Indicates if your slider is disabled.
  * The default setting is `false`.
  */
  @Prop() disabled: boolean = false;
  /**
   * Event emitted when the slider has been changed.
   */
  @Event() didChange: EventEmitter<any>;
  /**
   * Sets the disabled property for slider component.
   * @param val: boolean, `true` or `false`.
   */
  @Method()
  async setDisabled(val: boolean) {
    this.disabled = val;
  }

  setInputId() {
    let id = this.el.getAttribute('id');
    if (id) {
      let input = this.el.shadowRoot.querySelector('input');
      input.setAttribute('id', 'wc-' + id);
    }
  }

  setSliderPosition() {
    const rangeInterval = (Number(this.max) - Number(this.min));
    const rangePercent = (Number(this.sliderElement.value) + Math.abs(Number(this.min))) / rangeInterval * 100;
    this.sliderElement.style.setProperty('--sx', rangePercent + '%');
  }

  handleEvent() {
    this.sliderElement.addEventListener('input', () => {
      this.setSliderPosition();
    });
    this.didChange.emit(this.sliderElement);
  }

  componentDidLoad() {
    this.setInputId();
    this.sliderElement.value = this.value;
    this.setSliderPosition();
    this.handleEvent();
  }

  render() {
    return (
      <div class="slider-container">
        <input type="range" min={this.min || "0"} max={this.max} value={this.value || "0"} disabled={this.disabled} ref={el => this.sliderElement = el as HTMLInputElement} onChange={() => this.handleEvent()} />
      </div>
    )
  }
}