import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
  tag: "se-stepper-item",
  styleUrl: "stepper-item.scss",
  shadow: true
})
export class StepperItemComponent {
  /**
   * Indicates whether or not the stepper item is the last item in the stepper component.  The default setting is `false`.
   */
  @Prop() isLast: boolean = false;
  /**
   * Indicates the label for your stepper item.
   */
  @Prop() label: string;
  @Event() didClick: EventEmitter;

  emitEvent() {
    this.didClick.emit(this.label);
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
