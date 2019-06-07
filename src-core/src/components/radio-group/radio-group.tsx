import { Component, h, Watch, Element, Event, EventEmitter, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'se-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true
})
export class RadioGroupComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the background color of each button in the group.  The default setting is `standard`, rendering a light gray background.
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
   * Defines the selected values of the array.
   */
  @Prop({mutable: true}) value: string;
  /**
   * Passes the selected button value to the parent component when clicking on a button in the group.
   */
  @Event() didChange: EventEmitter;

  @Listen('didClick')
  buttonClickedHandler(event: CustomEvent) {
    this.handleEventChange(event, 'se-button');
  }

  @Listen('didCheck')
  radioButtonCheckedHandler(event: CustomEvent) {
    this.handleEventChange(event, 'se-radio');
  }

  componentDidLoad() {
    this.updateItemMode();
    const buttons = this.el.querySelectorAll('se-button, se-radio');
    buttons.forEach((button: any) => {
      button.selected = button.value === this.value;
    });
  }

  private updateItemMode(){
    let buttons = this.el.querySelectorAll('se-button, se-radio');
    buttons.forEach((button: any) => {
      if (button.localName == 'se-button') {
        button.setGrouped();
      }
      if (this.disabled) {
        button.disabled = true;
      }
      button.color = this.color;
    });
  }

  private handleEventChange(event: CustomEvent, elementName: string) {
    let buttonInfo = event.detail;
    this.value = buttonInfo.value;
    const buttons = this.el.querySelectorAll(elementName);
    buttons.forEach((button: any) => {
      button.selected = button.value === buttonInfo.value;
    });
    this.didChange.emit(this.value);
  }

  render() {
    return (
      <slot></slot>
    )
  }
}