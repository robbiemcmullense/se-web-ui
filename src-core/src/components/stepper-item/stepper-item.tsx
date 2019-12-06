import { Component, Event, EventEmitter, h, Host, Prop, Watch } from "@stencil/core";

@Component({
  tag: "se-stepper-item",
  styleUrl: "stepper-item.scss",
  shadow: true
})
export class StepperItemComponent {
  /**
   * Indicates the label for your stepper item.
   */
  @Prop() label: string;
  /**
   * Indicates the content for the currently selected step in the stepper.
   */
  @Prop() active: boolean;
  /**
   * Indicates whether a required item's data has been validated.  Useful if using a form field.
   * When the stepper component is set to linear mode, all stepper items will need to be validated before advancing the stpper.
   */
  @Prop() validated: boolean;
  /**
   * Event to send to the parent component when a stepper item's data is validated.
   * The boolean validated property is passed to the parent.
   */
  @Event() didValidate: EventEmitter;

  @Watch('validated')
  validatedDidChange() {
    this.didValidate.emit(this.validated);
  }

  render() {
    return (
      <Host
        class={[this.active ? 'active' : 'navitem-hidden'].join(' ')}>
        <slot></slot>
      </Host>
    )
  }
}