import { Component, Watch, Element, Event, EventEmitter, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'se-radio',
  styleUrl: 'radio.scss',
  shadow: true
})
export class RadioComponent {
  @Element() el: HTMLElement;

  /**
   * Defines the functionality of your button group.
   * `checkbox` is the default option, where all buttons in the group can be selected.
   * `radio` option indicates that only one button in the group can be selected at a time.
   */
  @Prop() option: 'checkbox' | 'radio' = 'checkbox';
  @Watch('option') optionDidChange() {
    this.updateItemMode()
  }
  /**
   * Optional property that defines the background color of each button in the group.
   */
  @Prop() color: 'standard' | 'alternative' | 'primary' | 'secondary' = 'standard';
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop({mutable: true}) disabled: boolean = false;
  @Watch('disabled') disabledDidChange() {
    this.updateItemMode()
  }
  /**
   * Define the selected values of the array.
   */

  @Prop({mutable: true}) value: Array<any> = [];
  /**
   * Passes the selected button value to the parent component when clicking on a button in the group.
   */
  @Event() change: EventEmitter;

  @Listen('clicked')
  buttonClickedHandler(event: CustomEvent) {
    let buttonInfo = event.detail;
    let isChecked = buttonInfo.selected;
    if (this.option === 'radio') {
      this.value = [];
      this.value = [...this.value, buttonInfo.value];
      let buttons = this.el.querySelectorAll('se-button');
      buttons.forEach((button: any) => {
        if(button.value !== buttonInfo.value){
          button.selected = false;
        }
      });
    }
    if (this.option === 'checkbox') {
      if(isChecked){
        this.value = [...this.value, buttonInfo.value];
      } else {
        this.value.splice(this.value.indexOf(buttonInfo.value), 1);
      }
    }
    this.change.emit(this.value);
  }

  componentDidLoad() {
    this.updateItemMode();
  }

  private updateItemMode(){
    let buttons = this.el.querySelectorAll('se-button');
    buttons.forEach((button: any) => {
      button.setGrouped();
      if (this.disabled) {
        button.disabled = true;
      }
      button.color = this.color;
    });
  }

  render() {
    return (
      <slot></slot>
    )
  }
}
