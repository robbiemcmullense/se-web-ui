import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Listen,
  Fragment,
} from '@stencil/core';
import { FiltrationSmartSectionData } from '../types';
import { filtrationSmartFacetType } from '../constants';
import {
  getSectionData,
  getSectionRefinementsIds,
  getSectionVisibleRefinementsIds,
  getIsSectionExpanded,
  getSectionVisibleSectionsIds,
  getSectionSectionsIds,
} from '../store';

@Component({
  tag: 'se-filtration-smart-group',
  styleUrl: 'group.scss',
  shadow: false,
})
export class FiltrationSmartGroup {
  /**
   * Id of the section that will be used to find the data in the Root Filter store.
   */
  @Prop() sectionId!: string;

  /**
   * Nesting level of the group. Used to determine if the section should be wrapped in another section.
   */
  @Prop({ mutable: true }) level = 0;

  /**
   * Set mobile view or not
   */
  @Prop({ mutable: true }) isMobile = false;

  /**
   * Event that has info about the section whose collapsed/expanded state should be changed.
   *  Root Filter component listens to it.
   */
  @Event()
  toggleIsSectionExpanded: EventEmitter<string>;

  @Listen('didGroupClick')
  onDidGroupClick(e: CustomEvent<boolean>): void {
    e.stopPropagation();
    this.toggleIsSectionExpanded.emit(this.sectionId);
  }

  get data(): FiltrationSmartSectionData {
    return getSectionData(this.sectionId);
  }

  get isExpanded(): boolean {
    return getIsSectionExpanded(this.sectionId, { isMobile: this.isMobile });
  }

  get visibleRefinements(): string[] {
    return this.isMobile
      ? getSectionRefinementsIds(this.sectionId)
      : getSectionVisibleRefinementsIds(this.sectionId);
  }

  get visibleSections(): string[] {
    return this.isMobile
      ? getSectionSectionsIds(this.sectionId)
      : getSectionVisibleSectionsIds(this.sectionId);
  }

  private renderList = (): HTMLElement => {
    return (
      <Fragment>
        {this.visibleRefinements.map(refinementId =>
          this.data.type === filtrationSmartFacetType.SINGLE ? (
            <se-filtration-smart-tab
              refinementId={refinementId}
              class="group__item"
            />
          ) : (
            <se-filtration-smart-checkbox
              refinementId={refinementId}
              class="group__item"
              isMobile={this.isMobile}
            />
          )
        )}

        {this.visibleSections.map(subsectionId => (
          <se-filtration-smart-group
            sectionId={subsectionId}
            level={this.level + 1}
            class="group__item"
            isMobile={this.isMobile}
          />
        ))}
      </Fragment>
    );
  };

  render(): HTMLElement {
    return this.level > 0 ? (
      <se-list-group item={this.data.name} collapsed={!this.isExpanded}>
        {this.renderList()}
      </se-list-group>
    ) : (
      this.renderList()
    );
  }
}
