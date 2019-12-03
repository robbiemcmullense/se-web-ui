import { Component, Element, Event, EventEmitter, h, Host, Prop, Watch } from "@stencil/core";

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
  @Prop() selected: boolean;
  /**
   * Indicates the content for the currently selected step in the stepper.
   */
  @Prop() selectedContent: boolean;
  /**
   * Indicates whether or not a stepper item has been disabled.
   */
  @Prop() disabled: boolean;
  /**
   * Indicates whether a required item's data has been validated.  Useful if using a form field.
   */
  @Prop() validated: boolean;
  /**
   * Event to send to the parent component when a stepper item's data is validated.
   */
  @Event() itemValidated: EventEmitter;

  @Watch('validated')
  validatedDidChange() {
    this.itemValidated.emit();
  }

  render() {
    return (
      <Host
        class={[this.selectedContent ? 'active' : 'navitem-hidden'].join(' ')}>
        <slot></slot>
      </Host>
    )
  }
}