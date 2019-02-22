import { Component, Event, EventEmitter, Prop, State } from "@stencil/core";

@Component({
  tag: "se-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})

export class CheckboxComponent {
  /**
   * The value you want to pass to the parent component when the checkbox is checked.
   */
  @Prop() value: string;
  /**
   * Defines the background color of the button.
   * `primary` is a green color and is the default value.
   * `accent` is a blue color.
   * `warn` is an orange color.
   * `error` is a red color.
   */
  @Prop() color: 'primary' | 'accent' | 'warn' | 'error' = 'primary';
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  @State() checked: boolean;
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  @Event() change: EventEmitter;

  emitEvent() {
    this.checked = !this.checked;
    let checkboxObject = {value: this.value, selected: this.checked}
    this.change.emit(checkboxObject);
  }

  render() {
    return (
      <label class="checkbox-container" data-disabled={this.disabled}>
        <slot></slot>
        <input type="checkbox" disabled={this.disabled}/>
        <span class="checkmark" data-color={this.color} onClick={() => this.emitEvent()}></span>
      </label>
    );
  }
}