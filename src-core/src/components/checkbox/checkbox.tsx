import { Component, Event, EventEmitter, Method, Prop, State } from "@stencil/core";

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
   * The label of the checkbox that will be attached to the box.
   */
  @Prop() label: string;
  /**
   * Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.
   */
  @Prop() required: boolean = false;
  /**
   * Defines the color of the checkbox.
   */
  @Prop() color: 'primary' | 'secondary' = 'primary';
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  /**
	 * Determines whether or not the checkbox is checked when you initialize it.  Checked if `true`.
	 */
  @Prop({mutable: true}) selected: boolean = false;
  @State() checked: boolean;
  /**
   * Set the required property on the checkbox element.
   */
  @Method()
  setRequired() {
    this.required = true;
  }
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  @Event() didCheck: EventEmitter;

  emitEvent() {
    this.checked = !this.checked;
    let checkboxObject = {value: this.value, selected: this.checked};
    this.didCheck.emit(checkboxObject);
  }

  componentDidLoad() {
    if (this.selected) {
      this.checked = this.selected;
    }
  }

  render() {
    return (
      <label class="checkbox-container" data-disabled={this.disabled}>
        {this.label}
        {this.required ? <span class="required">*</span> : ''}
        <input type="checkbox" checked={this.checked} disabled={this.disabled} onClick={() => this.emitEvent()}/>
        <span class="checkmark" data-color={this.color}></span>
      </label>
    );
  }
}