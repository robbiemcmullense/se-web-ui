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
   * Defines the height of each button in the group.
   * `small` is the default setting, rendering a 32px height and a 14px font size.
   * `nano` sets the height to 24px and the font size to 12px.
   */
  @Prop() size: 'small' | 'nano' = 'small';
  /**
   * Optional property that defines if the button is disabled.  Set to `false` by default.
   */
  @Prop({mutable: true}) disabled = false;
  /**
   * Defines the selected values of the array.
   */
  @Prop({mutable: true}) value: string;
  /**
   * Passes the selected button value to the parent component when clicking on a button in the group.
   */
  @Event() didChange: EventEmitter;
  children: NodeList;

  @Watch('disabled') disabledDidChange() {
    this.updateItemMode()
  }

  @Watch('value') valueDidChange(value: any) {
    this.selectChild(this.children, value);
    this.didChange.emit(this.value);
  }

  @Listen('didClick') buttonClickedHandler(event: CustomEvent) {
    this.handleChildClicked(event);
  }

  @Listen('didCheck') radioButtonCheckedHandler(event: CustomEvent) {
    this.handleChildClicked(event);
  }

  updateItemMode() {
    this.children.forEach((child: any) => {
      if (child.localName == 'se-button') {
        child.setGrouped();
        if (child.icon) {
          child.iconOnly = true;
        }
      }
      if (this.disabled) {
        child.disabled = true;
      }
      child.size = this.size;
      child.color = this.color;
    });
  }

  handleChildClicked(event: CustomEvent) {
    let buttonInfo = event.detail;
    this.value = buttonInfo.value;
    this.selectChild(this.children, this.value);
    this.didChange.emit(this.value);
  }

  selectChild(children: any, value: any) {
    children.forEach((child: any) => {
      child.selected = child.value === value;
    });
  }

  componentDidLoad() {
    this.children = this.el.querySelectorAll('se-button, se-radio');
    this.updateItemMode();
    this.selectChild(this.children, this.value);
  }

  render() {
    return (
      <slot></slot>
    )
  }
}
