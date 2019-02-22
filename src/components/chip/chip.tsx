import { Component, Element, Event, EventEmitter, Prop } from "@stencil/core";

@Component({
  tag: "se-chip",
  styleUrl: "chip.scss",
  shadow: true
})

export class ChipComponent {
  /**
   * The text you want to display in your chip.
   */
  @Prop() value: string;

  /**
   * Optional property that defines the background color of the button.
   * `primary` is a green color.
   * `accent` is a blue color.
   * `warn` is an orange color.
   * `error` is a red color.
   * `light` is a gray color.
   */
  @Prop() color: 'primary' | 'accent' | 'warn' | 'error';

  /**
   * Indicates whether or not the chip has a close button.  Set to `true` by default.
   */
  @Prop() canClose: boolean = true;
  @Element() el: HTMLElement;
  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  @Event() close: EventEmitter;

  closeChip() {
    this.close.emit(this.value);
  }

  hostData() {
    return {
      'class': this.color
    };
  }

  render() {
    return [
      <div class="value">{this.value}</div>,
      this.canClose && <div class="close se-icon" onClick={() => this.closeChip()}>action_delete_cross</div>
    ];
  }
}
