import { Component,Prop,Event,EventEmitter,Method } from '@stencil/core';

@Component({
  tag: 'se-slider',
  styleUrl: 'slider.scss',
  shadow : true
})
export class SliderComponent {

private sliderElement?: HTMLInputElement;
value:number=0;    
  /**
  * Indicates the minimum value of your slider.
  */
@Prop() min: number = 0;
  /**
  * Indicates the maximum value of your slider.
  */
@Prop() max: number = 100;
  /**
  * Indicates the disabled property of your slider.
  */
@Prop() disabled: boolean = false;
   /**
   * Event emitted when the slider has been changed.
   */
@Event() didChange: EventEmitter<any>;
/**
   * Set the disabled property for slider component.
   * @param val set to `true` or `false`.
   */
@Method()
  setDisabled(val: boolean): void {
    this.disabled = val;
  }
handleEvent() {  
  this.sliderElement.addEventListener('input',()=>{
  const rangeInterval = (Number(this.max) - Number(this.min));
  const rangePercent = (Number(this.sliderElement.value) + Math.abs(Number(this.min))) / rangeInterval * 100;
  this.sliderElement.style.setProperty('--sx',rangePercent+'%');
  });
  this.didChange.emit(this.sliderElement);
}
componentDidLoad() {
  this.handleEvent();
}

  render() {
    return [
      <div class="slider-container">
      <input type="range" min={this.min} max={this.max} value={this.value} disabled={this.disabled} ref={el => this.sliderElement= el as HTMLInputElement}  onChange={()=>this.handleEvent()} ></input>
      </div>
    ];
  }
}
