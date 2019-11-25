import { Component, Element, Event, EventEmitter, h, Prop, Watch } from "@stencil/core";

@Component({
  tag: "se-stepper-item",
  styleUrl: "stepper-item.scss",
  shadow: true
})
export class StepperItemComponent {
  @Element() el: HTMLElement;
  /**
   * Indicates the label for your stepper item.
   */
  @Prop() label: string;
  /**
   * Indicates whether or not this is a required section of your stepper component.  The default setting is `false`.
   * If set to `true`, the next step will not be accessible until the input fields associated with this step have been validated.
   */
  @Prop() required: boolean = false;
  /**
   * Indicates whether or not the stepper item is the last item in the stepper component.  The default setting is `false`.
   */
  @Prop() isLast: boolean = false;
  /**
   * Indicates the numerical position of the stepper item within the stepper component.
   */
  @Prop() step: number;
  /**
   * Indicates whether or not a stepper item has been selected.
   */
  @Prop() active: boolean;
  /**
   * Indicates whether or not a stepper item has been disabled.
   */
  @Prop() disabled: boolean;
  /**
   * Indicates whether a required item's data has been validated.  Useful if using a form field.
   */
  @Prop() validated: boolean;
  /**
   * Event to send to the parent component when clicking on a stepper item.
   * This event emits the stepper item element object and its label property.
   */
  @Event() didClick: EventEmitter;
  /**
   * Event to send to the parent component when a stepper item's data is validated.
   */
  @Event() itemValidated: EventEmitter;

  emitEvent() {
    this.didClick.emit({
      label: this.label,
      el: this.el
    });
  }

  @Watch('validated')
  validatedDidChange() {
    this.itemValidated.emit(this.validated);
  }

  render() {
    return (
      <div class={["stepper-item-wrapper", this.active ? "active" : ''].join(' ')}>
        {this.isLast ?
          [<div class={["stepper-item", this.disabled ? "disabled" : ''].join(' ')} onClick={() => this.emitEvent()}>
            <span class="indicator">{this.step}</span>
            <li class="stepper-item-label">{this.label}</li>
          </div>]
          :
          [<div class={["stepper-item", this.disabled ? "disabled" : ''].join(' ')} onClick={() => this.emitEvent()}>
            <span class="indicator">{this.step}</span>
            <li class="stepper-item-label">{this.label}</li>
          </div>,
          <se-divider></se-divider>]}
      </div>
    )
  }
}