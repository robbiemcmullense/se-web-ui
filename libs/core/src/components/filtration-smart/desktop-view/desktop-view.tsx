import { Component, Prop, h, Listen } from '@stencil/core';
import {
  getIsFilterPristine,
  getIsAllFacetsVisible,
  getIsViewMoreFacetsButtonVisible,
  getVisibleFacetsIds,
  getHiddenFacetsHavingCheckedFiltersCount,
  toggleIsSectionExpanded,
} from '../store';

@Component({
  tag: 'se-filtration-smart-desktop-view',
  styleUrl: '../filtration-smart.scss',
  shadow: true,
})
export class FiltrationSmartDesktopView {
  /**
   * Defines text that will be used in the "Reset" button.
   */
  @Prop() resetButtonLabel!: string;

  /**
   * Defines text of the "View more refinements" button in a facet.
   */
  @Prop() viewMoreRefinementsLabel!: string;

  /**
   * Defines text of the "View less refinements" button in a facet.
   */
  @Prop() viewLessRefinementsLabel!: string;

  /**
   * Defines text of the "View more facets" button at the bottom of the filter.
   */
  @Prop() viewMoreFacetsLabel!: string;

  /**
   * Defines text of the "View less facets" button at the bottom of the filter.
   */
  @Prop() viewLessFacetsLabel!: string;

  /**
   * Defines text that will be used as the header of the Filter.
   */
  @Prop() headerLabel: string;

  /**
   * Defines maximum height of a section content.
   */
  @Prop() maxFacetContentHeight: number;

  @Listen('toggleIsSectionExpanded')
  onToggleExpanded(e: CustomEvent<string>): void {
    const { detail: sectionId } = e;

    toggleIsSectionExpanded(sectionId);
  }

  get isAllFacetsVisible(): boolean {
    return getIsAllFacetsVisible();
  }

  get visibleFacetsIds(): string[] {
    return getVisibleFacetsIds();
  }

  get isPristine(): boolean {
    return getIsFilterPristine();
  }

  get hiddenFacetsHavingCheckedFiltersCount(): number {
    return getHiddenFacetsHavingCheckedFiltersCount();
  }

  get isViewMoreFacetsButtonVisible(): boolean {
    return getIsViewMoreFacetsButtonVisible();
  }

  render(): HTMLElement {
    return (
      <section class="filter">
        <header class="filter__header">
          {this.headerLabel && (
            <h2 class="filter__title">{this.headerLabel}:</h2>
          )}

          {!this.isPristine && (
            <se-filtration-smart-reset-button
              label={this.resetButtonLabel}
              class="filter__reset-button"
            />
          )}
        </header>

        {this.visibleFacetsIds.map(facetId => (
          <se-filtration-smart-facet
            class="filter__facet"
            facetId={facetId}
            viewMoreLabel={this.viewMoreRefinementsLabel}
            viewLessLabel={this.viewLessRefinementsLabel}
            maxContentHeight={this.maxFacetContentHeight}
          />
        ))}

        {this.isViewMoreFacetsButtonVisible && (
          <se-filtration-smart-view-more-facets-button
            class="filter__view-more-facets-button"
            count={this.hiddenFacetsHavingCheckedFiltersCount}
            viewMoreLabel={this.viewMoreFacetsLabel}
            viewLessLabel={this.viewLessFacetsLabel}
            isAllFacetsVisible={this.isAllFacetsVisible}
          />
        )}
      </section>
    );
  }
}
