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
  @Prop() min = 0;
  /**
  * Indicates the maximum value of your slider.
  * The default value is `100`.
  */
  @Prop() max = 100;
  /**
   * The label of the slider that will be attached to the input.
   */
  @Prop() label: string;
  /**
  * Indicates if your slider is disabled.
  * The default setting is `false`.
  */
  @Prop() disabled = false;
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
    const id = this.el.getAttribute('id');
    if (id) {
      const input = this.el.shadowRoot.querySelector('input');
      input.setAttribute('id', 'wc-' + id);
    }
  }

  setSliderPosition() {
    const rangeInterval = (Number(this.max) - Number(this.min));
    const rangePercent = (Number(this.sliderElement.value) - Number(this.min)) / rangeInterval * 100;
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
    if (this.value < this.min) {
      this.value = this.min;
    } else if (this.value > this.max) {
      this.value = this.max;
    }
    this.sliderElement.value = this.value;
    this.setSliderPosition();
    this.handleEvent();
  }

  render() {
    return (
      <label class="slider-container">
        {this.label}
        <input type="range" min={this.min || "0"} max={this.max} value={this.value || "0"} disabled={this.disabled} ref={el => this.sliderElement = el as HTMLInputElement} onChange={() => this.handleEvent()} />
      </label>
    )
  }
}
