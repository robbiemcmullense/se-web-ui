import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import arrow2Down from '@se/icons/svg/arrow2_down.svg';

@Component({
  tag: 'se-filtration-smart-view-more-refinements-button',
  styleUrl: 'view-more-refinements-button.scss',
  shadow: true,
})
export class FiltrationSmartViewMoreRefinementsButton {
  @Prop() facetId!: string;
  /**
   * Defines what label should be used inside the button:
   *  true => "show less"
   *  false => "show more"
   */
  @Prop() isAllRefinementsVisible!: boolean;

  /**
   * Defines what number should be rendered in the circle inside the button.
   */
  @Prop() count!: number;

  /**
   * Defines text of the "View more" button.
   */
  @Prop() viewMoreLabel!: string;

  /**
   * Defines text of the "View less" button.
   */
  @Prop() viewLessLabel!: string;

  /**
   * Event that signals Smart Filter to toggle visibility of all its refinements.
   */
  @Event()
  toggleViewMoreRefinements: EventEmitter<string>;

  private onClick = (): void => {
    this.toggleViewMoreRefinements.emit(this.facetId);
  };

  render(): HTMLElement {
    return (
      <button
        type="button"
        onClick={this.onClick}
        class="view-more-refinements-button"
      >
        <div class="view-more-refinements-button__body">
          {this.isAllRefinementsVisible
            ? this.viewLessLabel
            : `${this.viewMoreLabel} (${this.count})`}

          <se-icon
            class={{
              'view-more-refinements-button__arrow': true,
              'view-more-refinements-button__arrow--up': !this
                .isAllRefinementsVisible,
              'view-more-refinements-button__arrow--down': this
                .isAllRefinementsVisible,
            }}
            size="medium"
            innerHTML={this.isAllRefinementsVisible ? arrow2Up : arrow2Down}
          />
        </div>
      </button>
    );
  }
}