import { Component, h, Element, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import accessibility from '@se/icons/svg/accessibility.svg';

@Component({
  tag: 'se-accessibility-toggle',
  styleUrl: 'accessibility-toggle.scss',
  shadow: true,
})
export class AccessibilityToggleComponent {
  @Element() el: HTMLElement;

  /**
   * Defines the state of the toggle.
   * `false` by default.
   */
  @Prop({ mutable: true }) selected = false;
  @Watch('selected') selectedDidChange() {
    this.didChange.emit({selected: this.selected});
  }
  /**
   * Defines the text when the Accessibility mode is ON
   */
  @Prop() labelModeOn = 'Accessibility mode on';
  /**
   * Defines the text when the Accessibility mode is OFF
   */
  @Prop() labelModeOff = 'Accessibility mode off';

  /**
   * Passes accessibility toggle state to the parent component on a change of the toggle state
   */
  @Event() didChange: EventEmitter<{ selected: boolean }>;

  label;
  setLabel(selected) {
    this.label = selected ? this.labelModeOn : this.labelModeOff;
  }

  onClickHandler() {
    this.selected = !this.selected;
    this.setLabel(this.selected);
  }

  componentWillLoad() {
    this.setLabel(this.selected);
  }

  render() {
    return (
      <button
        onClick={() => this.onClickHandler()}
      >
        <se-icon
          size="medium"
          color="alternative"
          innerHTML={accessibility} //TODO update icon
        />
        <se-checkbox
          noInteractive
          option="toggle"
          selected={this.selected}
          class="toggle"
        />
        <label>
          {this.label}
        </label>
      </button>
    );
  }
}
