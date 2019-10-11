import { Component, h, Prop } from "@stencil/core";

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

  render() {
    return (
      <div class="stepper-item-wrapper">
        {this.isLast ?
          [<se-icon>information_circle</se-icon>,
          <li class="stepper-item">{this.label}</li>]
          :
          [<se-icon>information_circle</se-icon>,
          <li class="stepper-item">{this.label}</li>,
          <se-divider></se-divider>]}
      </div>
    )
  }
}
