import { Component, Element, Event, EventEmitter, h, Prop } from "@stencil/core";

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
   * Event to send to the parent component when clicking on a stepper item.
   * This event emits the stepper item element object and its label property.
   */
  @Event() didClick: EventEmitter;

  emitEvent() {
    this.didClick.emit({
      label: this.label,
      el: this.el
    });
  }

  render() {
    return (
      <div class="stepper-item-wrapper">
        {this.isLast ?
          [<span class="indicator"></span>,
          <li class="stepper-item" onClick={() => this.emitEvent()}>{this.label}</li>]
          :
          [<span class="indicator"></span>,
          <li class="stepper-item" onClick={() => this.emitEvent()}>{this.label}</li>,
          <se-divider></se-divider>]}
      </div>
    )
  }
}