import { Component, Element, Event, EventEmitter, h, Method, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "se-radio",
  styleUrl: "radio.scss",
  shadow: true
})

export class RadioComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the value you want to pass to the parent component when the radio button is checked.
   */
  @Prop() value: string;
  /**
   * Defines the label that will display next to the radio button.
   */
  @Prop() label: string;
  /**
   * Adds a red asterisk if the radio button is required when used in a form field.  Default setting is `false`.
   */
  @Prop() required: boolean = false;
  /**
   * Defines the color of the checkbox.
   * The default setting is `primary`, rendering a green color.
   * The `secondary` setting renders a blue color.
   */
  @Prop() color: 'primary' | 'secondary' = 'primary';
  /**
   * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  /**
	 * Determines whether or not the checkbox is checked when you initialize it.
   * The default setting is `false`.
   * Checked if set to `true`.
	 */
  @Prop({mutable: true}) selected: boolean = false;
  @State() checked: boolean;
  /**
   * Sets the required property on the radio button element.
   */
  @Method()
  async setRequired() {
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

  setInputId() {
    let id = this.el.getAttribute('id');
    if (id) {
      let input = this.el.shadowRoot.querySelector('input');
      input.setAttribute('id', 'wc-' + id);
    } 
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
    this.setInputId();
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