import {
  Component,
  Event,
  EventEmitter,
  Element,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'se-filtration-smart-mobile-view-trigger',
  styleUrl: 'mobile-view-trigger.scss',
  shadow: true,
})
export class FiltrationSmartMobileViewTrigger {
  @Element() el: HTMLSeFiltrationSmartMobileViewTriggerElement;

  /**
   * The text label of the "Show filter" button.
   */
  @Prop() label!: string;

  /**
   * The number of facets in which there are selected refinements.
   */
  @Prop() count?: number;

  /**
   * Event that toggle visibility of the mobile view.
   */
  @Event()
  toggleMobileView: EventEmitter<void>;

  private onClick = (): void => {
    this.toggleMobileView.emit();
  };

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render(): HTMLElement {
    return (
      <button class="mobile-view-trigger" onClick={this.onClick}>
        <se-icon color="standard" size="small">
          action_filter
        </se-icon>
        <div class="mobile-view-trigger__label">{this.label}</div>
        {!!this.count && (
          <div class="mobile-view-trigger__count">{this.count}</div>
        )}
        <se-icon
          class="mobile-view-trigger__arrow"
          color="standard"
          size="medium"
        >
          arrow2_right
        </se-icon>
      </button>
    );
  }
}
