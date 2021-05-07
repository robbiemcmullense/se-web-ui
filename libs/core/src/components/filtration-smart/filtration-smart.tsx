import {
  Component,
  Prop,
  h,
  Listen,
  Event,
  EventEmitter,
  Watch,
  Method,
  Element,
} from '@stencil/core';
import {
  FilterEmittedState,
  FiltrationSmartData,
  ToggleMobileViewVisibility,
} from './types';
import {
  getFiltersState,
  resetFilterToInitialState,
  setStore,
  toggleIsAllFacetsVisible,
  toggleIsRefinementChecked,
  toggleIsAllRefinementsShown,
  saveFilterStateOnMobileViewOpen,
  restoreFilterStateOnMobileViewClose,
  getRefinementData,
  initStore,
} from './store';
import analytics from '../../analytics';
import { refinementStateChangeEvent } from '../../analytics/events';

@Component({
  tag: 'se-filtration-smart',
  shadow: true,
})
export class FiltrationSmart {
  @Element() el: HTMLSeFiltrationSmartElement;

  /**
   * Normalized data for the filter.
   */
  @Prop() filters!: FiltrationSmartData;

  /**
   * Defines text that will be used in the "Reset" button.
   */
  @Prop() resetButtonLabel!: string;

  /**
   * Defines text of the show products button (in mobile view).
   */
  @Prop() showProductsLabel!: string;

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
   * Number of facets to show on initial render.
   */
  @Prop() visibleFacetsCount: number;

  /**
   * Number of refinements per facet to show on initial render.
   */
  @Prop() visibleRefinementsPerFacetCount: number;

  /**
   * The header label of filters used in desktop version.
   */
  @Prop() headerLabelDesktop: string;

  /**
   * The header label of filters used in mobile version.
   */
  @Prop() headerLabelMobile: string;

  /**
   * Defines if the mobile view is visible.
   */
  @Prop({ mutable: true }) isMobileViewVisible = false;

  /**
   * Defines maximum height of a facet content in desktop view.
   */
  @Prop() maxFacetContentHeight: number;

  /**
   * Event that emits list of checked filters.
   */
  @Event() filterStateChanged: EventEmitter<FilterEmittedState>;

  @Listen('refinementStateChanged')
  onRefinementStateChanged(e: CustomEvent<string>) {
    const { detail: refinementId } = e;

    toggleIsRefinementChecked(refinementId);

    const { isChecked, value } = getRefinementData(refinementId);

    this.filterStateChanged.emit({
      filtersState: getFiltersState(),
      lastChangedFilterId: value,
    });

    analytics.send(
      refinementStateChangeEvent,
      { refinementId, isChecked },
      this.el
    );
  }

  @Watch('filters')
  onFiltersPropChanged(filters: FiltrationSmartData): void {
    setStore({ filters });
  }

  @Listen('toggleViewMoreFacets')
  onToggleViewMoreHandler(): void {
    toggleIsAllFacetsVisible();
  }

  @Listen('resetAllClicked')
  onResetAllClicked(): void {
    resetFilterToInitialState();

    this.filterStateChanged.emit({
      filtersState: getFiltersState(),
    });
  }

  @Listen('toggleViewMoreRefinements')
  onToggleIsAllFiltersShown(e: CustomEvent<string>): void {
    const { detail: facetId } = e;

    toggleIsAllRefinementsShown(facetId);
  }

  @Watch('isMobileViewVisible')
  onIsMobileViewVisibilityChange() {
    if (this.isMobileViewVisible) {
      saveFilterStateOnMobileViewOpen();
    }
  }

  @Listen('toggleMobileView')
  onToggleMobileViewVisibility(
    e: CustomEvent<ToggleMobileViewVisibility>
  ): void {
    const { detail } = e;

    if (detail.restore) {
      restoreFilterStateOnMobileViewClose();
    }

    this.filterStateChanged.emit({
      filtersState: getFiltersState(),
    });

    this.isMobileViewVisible = !this.isMobileViewVisible;
  }

  /**
   * Use it if you want to reset the filter to its initial state.
   * All controls (single- and multi-selects) will be set to its initial states
   * (if on an initial render a checkbox was checked but later was unchecked by a user, it will be returned to checked state).
   * All sections (root and nested) will retain their states (expanded/collapsed).
   */
  @Method()
  async reset(): Promise<void> {
    // TODO: to be implemented
  }

  /**
   * Use it if you want to set the state (checked/unchecked) of a particular filter.
   */
  @Method()
  async setIsFilterChecked(
    filterId: string,
    isChecked: boolean
  ): Promise<void> {
    console.log(filterId);
    console.log(isChecked);
    // TODO: to be implemented
  }

  componentWillLoad(): void {
    initStore({
      filters: this.filters,
      visibleRefinementsPerFacetCount: this.visibleRefinementsPerFacetCount,
      visibleFacetsCount: this.visibleFacetsCount,
    });
  }

  render(): HTMLElement {
    if (!this.filters) {
      return null;
    }

    if (this.isMobileViewVisible) {
      return (
        <se-filtration-smart-mobile-view
          headerLabel={this.headerLabelMobile}
          resetButtonLabel={this.resetButtonLabel}
          showProductsLabel={this.showProductsLabel}
          isVisible={this.isMobileViewVisible}
        />
      );
    }

    return (
      <se-filtration-smart-desktop-view
        headerLabel={this.headerLabelDesktop}
        resetButtonLabel={this.resetButtonLabel}
        viewMoreRefinementsLabel={this.viewMoreRefinementsLabel}
        viewLessRefinementsLabel={this.viewLessRefinementsLabel}
        viewMoreFacetsLabel={this.viewMoreFacetsLabel}
        viewLessFacetsLabel={this.viewLessFacetsLabel}
        maxFacetContentHeight={this.maxFacetContentHeight}
      />
    );
  }
}
