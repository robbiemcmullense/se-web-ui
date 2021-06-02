import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Prop,
} from '@stencil/core';
import actionDeleteCross from '@se/icons/svg/action_delete_cross.svg';

@Component({
  tag: 'se-chip',
  styleUrl: 'chip.scss',
  shadow: true,
})
export class ChipComponent {
  @Element() el: HTMLElement;
  /**
   * The text you want to display in your chip.
   */
  @Prop() value: string;
  /**
   * Defines the size of the chip.
   * `nano` sets the font to 14px and the height to 20px.
   * `small` is the default option, with a 16px font and a 24px height.
   * `medium` is the default option, with a 16px font and a 32px height.
   * `large` is the default option, with a 16px font and a 40px height.
   */
  @Prop() size: 'nano' | 'small' | 'medium' | 'large' = 'medium';
  /**
   * Defines the background color of the chip.  The default setting is `standard`, which is a light gray color.
   */
  @Prop() color: 'standard' | 'alternative' = 'standard';
  /**
   * Indicates whether or not the chip has a close button.  Set to `false` by default.
   */
  @Prop() canClose = false;
  /**
   * Indicates whether or not the chip is selected.  Set to `false` by default.
   */
  @Prop() selected = false;
  /**
   * Indicates whether or not the chip is disabled.  Set to `false` by default.
   */
  @Prop() disabled = false;

  /**
   * Indicates whether or not the chip can changed state when hover or clicked on.  Set to `false` by default.
   */
  @Prop() readonly = false;

  /**
   * Optional property that defines if the chip displays as a block in it's container.
   * When set to true, the chip will be as wide as its container.
   */
  @Prop() block: boolean;

  /**
   * Indicates whether or not the chip has dashed border. Set to `false` by default.
   */
  @Prop({ mutable: true }) dashed = false;

  /**
   * Send the chip value to the parent component when clicking the close button of a chip.
   */
  @Event() didClose: EventEmitter;

  closeChip() {
    if (!this.disabled) {
      this.didClose.emit(this.value);
    }
  }

  iconSize() {
    switch (this.size) {
      case 'large':
        return 'small';
      case 'medium':
      case 'small':
        return 'micro';
      case 'nano':
        return 'nano';
      default:
        return 'small';
    }
  }

  render() {
    return (
      <button
        onClick={() => this.el.blur()}
        disabled={this.disabled}
        class={{
          'se-chip': true,
          [this.size]: !!this.size,
          [this.color]: !!this.color,
          'can-close': this.canClose,
          clickable: !(this.readonly || this.disabled),
          selected: this.selected,
          'display-block': this.block,
          dashed: this.dashed,
        }}
      >
        <slot name="start"></slot>
        <div class="value" title={this.value}>
          {this.value}
        </div>
        {this.canClose ? (
          <se-icon
            class="close"
            option="button"
            size={this.iconSize()}
            no-hover
            disabled={this.disabled}
            onClick={() => this.closeChip()}
          >
            <span innerHTML={actionDeleteCross}></span>
          </se-icon>
        ) : (
          ''
        )}
      </button>
    );
  }
}
