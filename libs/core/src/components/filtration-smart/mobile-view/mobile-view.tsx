import { Component, Prop, h, Event, EventEmitter, Listen } from '@stencil/core';
import {
  getIsFilterPristine,
  getIsAllFacetsVisible,
  toggleFacetsExpanded,
  getFacetsIds,
  saveFilterStateOnMobileViewOpen,
  toggleIsSectionExpandedMobile,
  getIsSectionRoot,
} from '../store';
import { ToggleMobileViewVisibility } from '../types';

@Component({
  tag: 'se-filtration-smart-mobile-view',
  styleUrl: '../filtration-smart.scss',
  shadow: true,
})
export class FiltrationSmartMobileView {
  /**
   * Defines text that will be used in the "Reset" button.
   */
  @Prop() resetButtonLabel!: string;

  /**
   * Defines if the mobile view is visible.
   */
  @Prop() isVisible!: boolean;

  /**
   * The header label of filters.
   */
  @Prop() headerLabel: string;

  /**
   * The text label of the show products button.
   */
  @Prop() showProductsLabel!: string;

  /**
   * Event that closes mobile view with two options:
   *  { restore: true } -- closes mobile view and undoes changes made in mobile view
   *  { restore: false } -- closes mobile view and applies changes made in mobile view
   */
  @Event()
  toggleMobileView: EventEmitter<ToggleMobileViewVisibility>;

  @Listen('toggleIsSectionExpanded')
  onToggleExpanded(e: CustomEvent<string>): void {
    const { detail: sectionId } = e;

    if (getIsSectionRoot(sectionId)) {
      toggleFacetsExpanded(sectionId);
    } else {
      toggleIsSectionExpandedMobile(sectionId);
    }
  }

  @Listen('didCloseDialog')
  closeDialog(): void {
    this.closeAndRestoreFilters();
  }

  componentWillLoad(): void {
    saveFilterStateOnMobileViewOpen();
  }

  get isPristine(): boolean {
    return getIsFilterPristine();
  }

  get visibleFacetsIds(): string[] {
    return getFacetsIds();
  }

  get isAllFacetsVisible(): boolean {
    return getIsAllFacetsVisible();
  }

  private closeAndRestoreFilters = (): void => {
    this.toggleMobileView.emit({
      restore: true,
    });
  };

  private closeAndApplyFilters = (): void => {
    this.toggleMobileView.emit({
      restore: false,
    });
  };

  render(): HTMLElement {
    return (
      <section class="filter">
        <se-dialog open={this.isVisible} size="fill" color="alternative">
          <se-dialog-header closeIcon class="filter__header">
            <h2 class="filter__title">{this.headerLabel}</h2>
          </se-dialog-header>

          <se-dialog-content class="filter__content" option="fill">
            <div class="filter__reset-button-wrapper">
              <se-filtration-smart-reset-button
                label={this.resetButtonLabel}
                disabled={this.isPristine}
              />
            </div>

            {this.visibleFacetsIds.map(facetId => (
              <se-filtration-smart-facet
                class="filter__facet"
                facetId={facetId}
                isMobile
              />
            ))}
          </se-dialog-content>

          <se-dialog-footer class="filter__footer">
            <se-button
              option="flat"
              block
              color="secondary"
              size="medium"
              onClick={this.closeAndApplyFilters}
              padding="none"
              class="filter__submit-button"
            >
              {this.showProductsLabel}
            </se-button>
          </se-dialog-footer>
        </se-dialog>
      </section>
    );
  }
}
