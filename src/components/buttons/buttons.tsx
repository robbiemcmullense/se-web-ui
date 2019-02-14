import { Component, State, Element, Event, EventEmitter, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'se-buttons',
  styleUrl: 'buttons.scss',
  shadow: true
})
export class ButtonsComponent {
  /**
   * Defines the functionality of your button group.
   * `checkbox` is the default option, where all buttons in the group can be selected.
   * `radio` mode indicates that only one button in the group can be selected at a time.
   */
  @Prop() mode: 'checkbox' | 'radio' = 'checkbox';
  /**
   * Optional property that defines the background color of each button in the group.
   * `primary` is a green color.
   * `accent` is a blue color.
   * `warn` is an orange color.
   * `error` is a red color.
   */
  @Prop() color: 'primary' | 'accent' | 'warn' | 'error';
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop({mutable: true}) disabled: boolean = false;
  @State() value: Array<any> = [];
  @Element() el: HTMLElement;
  /**
   * Passes the selected button value to the parent component when clicking on a button in the group.
   */
  @Event() change: EventEmitter;

  @Listen('clicked') 
  buttonClickedHandler(event: CustomEvent) {
    let buttonInfo = event.detail;
    let isChecked = this.value.indexOf(buttonInfo.value) > -1;
    if (this.mode == 'radio') {
      this.value = [];
      this.value = [...this.value, buttonInfo.value];
      let buttons = this.el.querySelectorAll('se-button');
      buttons.forEach((button) => {
        button.setActive(false);
      });
      buttonInfo.setActive(true);
    }
    else if (this.mode == 'checkbox' && !isChecked) {
      this.value = [...this.value, buttonInfo.value];
    } else {
      this.value.splice(this.value.indexOf(buttonInfo.value), 1);
    }
    this.change.emit(this.value);
  }

  render() {
    let buttons = this.el.querySelectorAll('se-button');
    buttons.forEach((button) => {
      button.setGrouped();
      if (this.disabled) {
        button.setDisabled(true);
      }
      if (this.color) {
        button.setColor(this.color);
      }
    });
    
    return (
      <slot></slot>
    )
  }
}