import {
  Component,
  Prop,
  h,
  Element,
  Event,
  EventEmitter,
  Fragment,
} from '@stencil/core';
import arrow2Up from '@se/icons/svg/arrow2_up.svg';
import { FiltrationSmartSectionData } from '../types';
import {
  getSectionData,
  getIsSectionExpanded,
  getIsFacetHasAllRefinementsVisible,
  getIsFacetHasMoreRefinementsThanLimit,
  getFacetRefinementsLimitOverflow,
  getFacetRefinementsCheckedWithCountDeep,
  getIsFacetSingleSelect,
  getSectionDataAttrsData,
} from '../store';
import { listOption } from '../../list/constants';
import { setElementDataAttrs } from '../../../utils';

@Component({
  tag: 'se-filtration-smart-facet',
  styleUrl: 'facet.scss',
  shadow: true,
})
export class FiltrationSmartFacet {
  @Element() el: HTMLSeFiltrationSmartFacetElement;

  /**
   * Facet ID that will be used to retrieve data from store.
   */
  @Prop() facetId!: string;

  /**
   * Defines if the facet is used in mobile view.
   */
  @Prop({ mutable: true }) isMobile = false;

  /**
   * Defines maximum height of the content.
   */
  @Prop() maxContentHeight?: number;

  /**
   * Defines text of the "View more refinements" button.
   */
  @Prop() viewMoreLabel?: string;

  /**
   * Defines text of the "View less refinements" button.
   */
  @Prop() viewLessLabel?: string;

  /**
   * Event that has info about facet whose collapsed/expanded state should be changed.
   *  Root Filter component listens to it.
   */
  @Event()
  toggleIsSectionExpanded: EventEmitter<string>;

  constructor() {
    this.el.dir = document.documentElement.dir || 'auto';
  }

  componentWillLoad(): void {
    const dataAttrsData = getSectionDataAttrsData(this.facetId);

    if (!dataAttrsData) {
      return;
    }

    setElementDataAttrs(this.el, dataAttrsData);
  }

  private onBlockHeaderClick = (): void => {
    if (this.isMobile || this.data.isCollapsible) {
      this.toggleIsSectionExpanded.emit(this.facetId);
    }
  };

  get data(): FiltrationSmartSectionData {
    return getSectionData(this.facetId);
  }

  get isExpanded(): boolean {
    return getIsSectionExpanded(this.facetId, { isMobile: this.isMobile });
  }

  get isAllRefinementsVisible(): boolean {
    return getIsFacetHasAllRefinementsVisible(this.facetId);
  }

  get hasMoreRefinementsThanLimit(): boolean {
    return getIsFacetHasMoreRefinementsThanLimit(this.facetId);
  }

  get refinementsLimitOverflow(): number {
    return getFacetRefinementsLimitOverflow(this.facetId);
  }

  get refinementsCheckedLabelsWithCount(): { label: string; count: number }[] {
    return getFacetRefinementsCheckedWithCountDeep(this.facetId);
  }

  get isFacetSingleSelect(): boolean {
    return getIsFacetSingleSelect(this.facetId);
  }

  get hasScroll(): boolean {
    return (
      this.isAllRefinementsVisible &&
      !this.isFacetSingleSelect &&
      !this.isMobile
    );
  }

  get hasFooter(): boolean {
    return (
      !this.isMobile &&
      !this.isFacetSingleSelect &&
      this.isExpanded &&
      this.hasMoreRefinementsThanLimit
    );
  }

  get hasDivider(): boolean {
    return (
      (!this.isMobile && !this.data.isCollapsible) ||
      (this.data.isCollapsible && this.isExpanded)
    );
  }

  render(): HTMLElement {
    const { name, filters, sections, isCollapsible } = this.data;

    const HeaderTriggerTag = isCollapsible || this.isMobile ? 'button' : 'div';

    return (
      <se-block
        corner="none"
        option={this.isMobile ? 'basic' : 'card'}
        margin="none"
      >
        <se-block-header divider={this.hasDivider} option="fill">
          <HeaderTriggerTag
            onClick={
              (isCollapsible || this.isMobile) && this.onBlockHeaderClick
            }
            class="facet__header-button"
            slot="start"
          >
            <div class="facet__header-button-body">
              <div class="facet__header-labels-wrapper">
                <div class="facet__name">{name}</div>
                {this.isMobile && (
                  <div class="facet__labels">
                    {this.refinementsCheckedLabelsWithCount.map(
                      ({ label, count }, index, input) => (
                        <Fragment>
                          <span
                            class={{
                              facet__label: true,
                              'facet__label--disabled': count === 0,
                            }}
                          >
                            {label}
                            {index !== input.length - 1 && ', '}
                          </span>
                        </Fragment>
                      )
                    )}
                  </div>
                )}
              </div>
              {(this.isMobile || isCollapsible) && (
                <se-icon
                  color="standard"
                  icon-only
                  size="micro"
                  slot="end"
                  rotate={!this.isExpanded && '180'}
                  innerHTML={arrow2Up}
                  class="facet__header-icon"
                />
              )}
            </div>
          </HeaderTriggerTag>
        </se-block-header>

        {this.isExpanded && (!!sections.length || !!filters.length) && (
          <se-block-content
            option="fill"
            maxHeight={this.hasScroll ? this.maxContentHeight : undefined}
          >
            <se-list
              option={listOption.FILTER}
              selectedColor="primary"
              class={{
                facet__list: true,
                'facet__list--facet-has-footer': this.hasFooter,
              }}
            >
              <se-filtration-smart-group
                sectionId={this.facetId}
                isMobile={this.isMobile}
              />
            </se-list>
          </se-block-content>
        )}

        {this.hasFooter && (
          <se-block-footer option="fill">
            <se-filtration-smart-view-more-refinements-button
              facetId={this.facetId}
              slot="start"
              viewMoreLabel={this.viewMoreLabel}
              viewLessLabel={this.viewLessLabel}
              isAllRefinementsVisible={this.isAllRefinementsVisible}
              count={this.refinementsLimitOverflow}
            />
          </se-block-footer>
        )}
      </se-block>
    );
  }
}
