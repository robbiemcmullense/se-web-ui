import { Component, Event, EventEmitter, Method, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "se-radio",
  styleUrl: "radio.scss",
  shadow: true
})

export class RadioComponent {
  /**
   * The value you want to pass to the parent component when the checkbox is checked.
   */
  @Prop() value: string;
  /**
   * The label of the checkbox that will be attached to the box.
   */
  @Prop() label: string;
  /**
   * Adds a red asterisk if the radio button is required when used in a form field.  Default is `false`.
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
   * Set the required property on the radio button element.
   */
  @Method()
  setRequired() {
    this.required = true;
  }
  /**
   * Send the checkbox value to the parent component when clicking on the checkbox.
   */
  @Event() didCheck: EventEmitter;
  @Watch('selected')
  selectedDidChange() {
    this.checked = this.selected;
  }

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
      <label class="radio-container" data-disabled={this.disabled}>
        {this.label}
        {this.required ? <span class="required">*</span> : ''}
        <input type="radio" checked={this.checked} disabled={this.disabled} onClick={() => this.emitEvent()}/>
        <span class="checkdot" data-color={this.color}></span>
      </label>
    );
  }
}