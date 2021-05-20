import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
} from '@stencil/core';
import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import arrow2Down from '@se/icons/svg/arrow2_down.svg';

@Component({
  tag: 'se-filtration-smart-view-more-facets-button',
  styleUrl: 'view-more-facets-button.scss',
  shadow: true,
})
export class FiltrationSmartViewMoreSectionsButton {
  @Element() el: HTMLSeFiltrationSmartViewMoreFacetsButtonElement;

  /**
   * Defines what label should be used inside the button:
   *  true => "show less"
   *  false => "show more"
   */
  @Prop() isAllFacetsVisible!: boolean;

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
   * Event that signals Smart Filter to toggle visibility of all its facets.
   */
  @Event()
  toggleViewMoreFacets: EventEmitter<void>;

  private onClick = (): void => {
    this.toggleViewMoreFacets.emit();
  };

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  render(): HTMLElement {
    return (
      <button
        type="button"
        onClick={this.onClick}
        class="view-more-facets-button"
      >
        <div class="view-more-facets-button__body">
          {this.isAllFacetsVisible ? this.viewLessLabel : this.viewMoreLabel}
          <se-icon
            class={{
              'view-more-facets-button__arrow': true,
              'view-more-facets-button__arrow--up': this.isAllFacetsVisible,
              'view-more-facets-button__arrow--down': !this.isAllFacetsVisible,
            }}
            size="medium"
            innerHTML={this.isAllFacetsVisible ? arrow2Up : arrow2Down}
          />

          {this.count > 0 && (
            <div class="view-more-facets-button__count">{this.count}</div>
          )}
        </div>
      </button>
    );
  }
}
