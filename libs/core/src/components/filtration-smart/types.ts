import { filtrationSmartFacetType } from './constants';

export interface FiltrationSmartRefinementData {
  label: string;
  value: string;
  count?: number;
  isChecked?: boolean;
  isDisabled?: boolean;
  rootSectionId?: string;
}

export interface FiltrationSmartSectionData {
  name: string;
  isCollapsible: boolean;
  filters: string[];
  sections: string[];
  type?: FiltrationSmartSectionType;
  rootSectionId?: string;
}

export type FiltrationSmartSections = Record<
  string,
  FiltrationSmartSectionData
>;
export type FiltrationSmartRefinements = Record<
  string,
  FiltrationSmartRefinementData
>;
export interface FiltrationSmartEntities {
  section: FiltrationSmartSections;
  filter: FiltrationSmartRefinements;
}

export interface FiltrationSmartData {
  result: string[];
  entities: FiltrationSmartEntities;
}

export interface FiltrationSmartMainStore {
  rootSectionsIds: string[];
  facetsWithAllRefinementsShownIds: string[];
  isAllFacetsVisible: boolean;
}

export interface FiltrationSmartStoreInitialConfig {
  filters: FiltrationSmartData;
  visibleFacetsCount?: number;
  visibleRefinementsPerFacetCount?: number;
  dataAttrsData?: FiltrationSmartDataAttrsData;
}

export interface FilterEmittedState {
  filtersState: Record<string, FiltrationSmartCheckboxState>;
  lastChangedFilterId?: string;
}

export type FiltrationSmartSectionType = typeof filtrationSmartFacetType[keyof typeof filtrationSmartFacetType];

/*
 * Other kinds of filters should emit a different shape.
 * For example, range filter should emit something like this:
 *   type FilterRangeState = {
 *      type: 'range'
 *      value: {
 *        min: 123,
 *        max: 456,
 *      }
 *   }
 */
export interface FiltrationSmartCheckboxState {
  type: 'checkbox';
  value: boolean;
}

export interface ToggleMobileViewVisibility {
  restore: boolean;
}

export interface FiltrationSmartDataAttrsData {
  section: Record<string, Record<string, string>>;
  filter: Record<string, Record<string, string>>;
}
