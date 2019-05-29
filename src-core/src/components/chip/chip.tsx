import { Component, Element, Event, EventEmitter, h, Host, Prop } from "@stencil/core";

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
   * Defines the background color of the chip.  The default setting is `standard`, which is a light gray color.
   */
  @Prop() color: 'standard' | 'alternative' | 'primary' | 'secondary' | 'skyBlue' | 'darkBlue' | 'red' | 'fuchsia' | 'orange' | 'gray' | 'selected' | 'yellow' = 'standard';
  /**
   * Indicates whether or not the chip has a close button.  Set to `false` by default.
   */
  @Prop() canClose: boolean = false;
  /**
   * Indicates whether or not the chip is disabled.  Set to `false` by default.
   */
  @Prop() disabled: boolean = false;
  @Element() el: HTMLElement;
  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  @Event() didClose: EventEmitter;

  closeChip() {
    console.log('close chip function entered');
    if (!this.disabled) {
      console.log('emitting didClose event');
      this.didClose.emit(this.value);
    }
  }

  render() {
    return (
      <Host class={this.color}>
        <div class="value">{this.value}</div>
        {this.canClose ? <div class="close se-icon" onClick={() => this.closeChip()}>action_delete_cross</div> : ''}
      </Host>
    );
  }
}
