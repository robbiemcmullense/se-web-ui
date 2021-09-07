import { createStore } from '@stencil/store';
import cloneDeep from 'lodash/cloneDeep';
import pull from 'lodash/pull';
import {
  FiltrationSmartCheckboxState,
  FiltrationSmartRefinementData,
  FiltrationSmartSectionData,
  FiltrationSmartStoreInitialConfig,
  FiltrationSmartData,
  FiltrationSmartMainStore,
  FiltrationSmartSections,
  FiltrationSmartEntities,
  FiltrationSmartRefinements,
  FiltrationSmartDataAttrsData,
} from './types';
import { filtrationSmartFacetType } from './constants';

// component-wide variables set during the first render
let visibleRefinementsPerFacetCount = Infinity;
let visibleFacetsCount = Infinity;
let filterStateBeforeMobileViewOpen: FiltrationSmartEntities;
let initialFilterState: FiltrationSmartData;

// TODO: remove when we'll drop IE11 support
//  We need `xxxAsObject` variables because IE doesn't work with Proxies
//  and I haven't found another way to access and iterate over store state.
//  If not for IE11 we could iterate over `sectionsStore.state`.
let refinementsStoreAsObject: FiltrationSmartRefinements = {};
let sectionsStoreAsObject: FiltrationSmartSections = {};
let dataAttrsData: FiltrationSmartDataAttrsData = { section: {}, filter: {} };
const sectionsExpandedStoreAsObject = {};
const sectionsExpandedStoreMobileAsObject = {};
const refinementsCheckedStateSequence: string[] = [];

// stores
const refinementsStore = createStore<FiltrationSmartRefinements>({});

refinementsStore.on('set', (refinementId, newRefinementData): void => {
  refinementsStoreAsObject[refinementId] = newRefinementData;
});

refinementsStore.on('reset', (): void => {
  refinementsCheckedStateSequence.length = 0;
});

const sectionsStore = createStore<FiltrationSmartSections>({});

sectionsStore.on('set', (sectionId, newSectionData) => {
  sectionsStoreAsObject[sectionId] = newSectionData;
});

const sectionsExpandedStore = createStore<Record<string, boolean>>({});

sectionsExpandedStore.on('set', (sectionId, newValue) => {
  sectionsExpandedStoreAsObject[sectionId] = newValue;
});

const sectionsExpandedStoreMobile = createStore<Record<string, boolean>>({});

sectionsExpandedStoreMobile.on('set', (sectionId, newValue) => {
  sectionsExpandedStoreMobileAsObject[sectionId] = newValue;
});

const mainStore = createStore<FiltrationSmartMainStore>({
  rootSectionsIds: [],
  facetsWithAllRefinementsShownIds: [],
  isAllFacetsVisible: false,
});

// entities getters
export const getFacetsIds = (): string[] => {
  return mainStore.get('rootSectionsIds');
};

export const getRefinementData = (
  refinementId: string
): FiltrationSmartRefinementData => {
  return refinementsStore.get(refinementId);
};

const getRefinementFacetId = (refinementId: string): string => {
  return getRefinementData(refinementId).rootSectionId;
};

export const getSectionData = (
  sectionId: string
): FiltrationSmartSectionData => {
  return sectionsStore.get(sectionId);
};

const getSectionFacetId = (sectionId: string): string => {
  return getSectionData(sectionId).rootSectionId;
};

export const getRefinementDataAttrsData = (refinementId: string): Record<string, string> => {
  return dataAttrsData.filter[refinementId];
};

export const getSectionDataAttrsData = (sectionId: string): Record<string, string> => {
  return dataAttrsData.section[sectionId];
};

export const getIsSectionRoot = (sectionId: string): boolean => {
  return getSectionFacetId(sectionId) === sectionId;
};

export const getRefinements = (): Record<
  string,
  FiltrationSmartRefinementData
> => {
  return refinementsStoreAsObject;
};

export const getIsSectionExpanded = (
  sectionId: string,
  { isMobile }: { isMobile: boolean }
): boolean => {
  if (isMobile) {
    return sectionsExpandedStoreMobile.get(sectionId);
  }

  return sectionsExpandedStore.get(sectionId);
};

export const getIsFacetSingleSelect = (sectionId: string): boolean => {
  return getSectionData(sectionId).type === filtrationSmartFacetType.SINGLE;
};

export const getIsFacetHasAllRefinementsVisible = (
  sectionId: string
): boolean => {
  const facetId = getSectionFacetId(sectionId);
  return mainStore.get('facetsWithAllRefinementsShownIds').includes(facetId);
};

export const getSectionRefinementsIds = (sectionId: string): string[] => {
  return getSectionData(sectionId).filters;
};

export const getSectionSectionsIds = (sectionId: string): string[] => {
  return getSectionData(sectionId).sections;
};

const getFiltersBeforeSection = (sectionId: string): string[] => {
  const facetId = getSectionFacetId(sectionId);

  if (sectionId === facetId) {
    return [];
  }

  const sectionsIds = getSectionSectionsIds(facetId);

  const index = sectionsIds.indexOf(sectionId);
  const sectionsBefore = sectionsIds.slice(0, index);

  const refinementsIds = getSectionRefinementsIds(facetId);

  return sectionsBefore.reduce((result, sectionIdNested) => {
    const nestedFilters = getSectionRefinementsIds(sectionIdNested);
    return [...result, ...nestedFilters];
  }, refinementsIds);
};

export const getSectionVisibleRefinementsLimited = (
  sectionId: string
): string[] => {
  const prevSectionsFiltersCount = getFiltersBeforeSection(sectionId).length;
  const currentSectionFilters = getSectionRefinementsIds(sectionId);

  if (prevSectionsFiltersCount > visibleRefinementsPerFacetCount) {
    return [];
  }

  const filtersToShowCount =
    visibleRefinementsPerFacetCount - prevSectionsFiltersCount;

  return currentSectionFilters.slice(0, filtersToShowCount);
};

export const getSectionVisibleSectionsLimitedIds = (
  sectionId: string
): string[] => {
  const prevSectionsFiltersCount = getFiltersBeforeSection(sectionId).length;
  const currentSectionFiltersCount = getSectionRefinementsIds(sectionId).length;

  let limitReached = false;
  let sectionFacetRefinementsCount = prevSectionsFiltersCount + currentSectionFiltersCount;

  if (sectionFacetRefinementsCount >= visibleRefinementsPerFacetCount) {
    return [];
  }

  return getSectionSectionsIds(sectionId).reduce((res, sectionIdNested) => {
    if (!limitReached) {
      const refinementsCount = getSectionRefinementsIds(sectionIdNested).length;

      if (refinementsCount > 0) {
        sectionFacetRefinementsCount += refinementsCount;
        limitReached = sectionFacetRefinementsCount >= visibleRefinementsPerFacetCount;
        res.push(sectionIdNested);
      }
    }

    return res;
  }, []);
};

export const getSectionRefinementsDeep = (sectionId: string): string[] => {
  const filters = getSectionRefinementsIds(sectionId);
  const sectionsNested = getSectionSectionsIds(sectionId);

  const traverser = (result, sectionIdNested) => {
    const nestedFilters = getSectionRefinementsIds(sectionIdNested);

    result = [...result, ...nestedFilters];

    const nestedSections = getSectionSectionsIds(sectionIdNested);

    return nestedSections.reduce(traverser, result);
  };

  return sectionsNested.reduce(traverser, filters);
};

export const getFacetRefinementsLimitOverflow = (sectionId: string): number => {
  return (
    getSectionRefinementsDeep(sectionId).length -
    visibleRefinementsPerFacetCount
  );
};

export const getIsFacetHasMoreRefinementsThanLimit = (
  sectionId: string
): boolean => {
  return (
    getSectionRefinementsDeep(sectionId).length >
    visibleRefinementsPerFacetCount
  );
};

export const getSectionVisibleRefinementsIds = (
  sectionId: string
): string[] => {
  if (
    getIsFacetSingleSelect(sectionId) ||
    getIsFacetHasAllRefinementsVisible(sectionId)
  ) {
    return getSectionRefinementsIds(sectionId);
  }

  return getSectionVisibleRefinementsLimited(sectionId);
};

export const getSectionVisibleSectionsIds = (sectionId: string): string[] => {
  if (
    getIsFacetSingleSelect(sectionId) ||
    getIsFacetHasAllRefinementsVisible(sectionId)
  ) {
    return getSectionSectionsIds(sectionId);
  }

  return getSectionVisibleSectionsLimitedIds(sectionId);
};

export const getIsAllFacetsVisible = (): boolean => {
  return mainStore.get('isAllFacetsVisible');
};

export const getVisibleFacetsIds = (): string[] => {
  return getIsAllFacetsVisible()
    ? getFacetsIds()
    : getFacetsIds().slice(0, visibleFacetsCount);
};

const getHiddenFacetsIds = (): string[] => {
  if (getIsAllFacetsVisible()) {
    return [];
  }

  return getFacetsIds().slice(visibleFacetsCount);
};

export const getHiddenFacetsHavingCheckedFiltersCount = (): number => {
  const rootSectionsWithCheckedFilters = new Set<string>();

  const traverser = (result: Set<string>, sectionId: string): Set<string> => {
    const sectionHasCheckedRefinements = getSectionData(sectionId).filters.some(
      refinementId => getRefinementData(refinementId).isChecked
    );

    if (sectionHasCheckedRefinements) {
      result.add(getSectionFacetId(sectionId));
    }

    return getSectionSectionsIds(sectionId).reduce(traverser, result);
  };

  return getHiddenFacetsIds().reduce(traverser, rootSectionsWithCheckedFilters)
    .size;
};

export const getIsViewMoreFacetsButtonVisible = (): boolean => {
  return getFacetsIds().length > visibleFacetsCount;
};

// entities setters
export const toggleIsAllFacetsVisible = (): void => {
  mainStore.set('isAllFacetsVisible', !mainStore.get('isAllFacetsVisible'));
};

export const toggleFacetsExpanded = (sectionId: string): void => {
  if (sectionsExpandedStoreMobile.get(sectionId)) {
    sectionsExpandedStoreMobile.set(sectionId, false);
  } else {
    mainStore.get('rootSectionsIds').forEach(rootSectionId => {
      sectionsExpandedStoreMobile.set(rootSectionId, false);
    });

    sectionsExpandedStoreMobile.set(sectionId, true);
  }
};

export const toggleIsSectionExpanded = (sectionId: string): void => {
  sectionsExpandedStore.set(sectionId, !sectionsExpandedStore.get(sectionId));
};

export const toggleIsSectionExpandedMobile = (sectionId: string): void => {
  sectionsExpandedStoreMobile.set(
    sectionId,
    !sectionsExpandedStoreMobile.get(sectionId)
  );
};

const isRefinementInSingleSelectFacet = (refinementId: string): boolean => {
  const facetId = getRefinementFacetId(refinementId);
  return getIsFacetSingleSelect(facetId);
};

export const toggleIsRefinementChecked = (refinementId: string): void => {
  const {
    isChecked: refinementIsChecked,
    rootSectionId: refinementFacetId,
    label,
  } = getRefinementData(refinementId);

  if (isRefinementInSingleSelectFacet(refinementId)) {
    getSectionRefinementsIds(refinementFacetId).forEach(
      refinementIdToUncheck => {
        const filterToUncheck = getRefinementData(refinementIdToUncheck);
        refinementsStore.set(refinementIdToUncheck, {
          ...filterToUncheck,
          isChecked: false,
        });
      }
    );

    const refinementToCheck = getRefinementData(refinementId);
    refinementsStore.set(refinementId, {
      ...refinementToCheck,
      isChecked: true,
    });
  } else {
    const filterToToggleIsChecked = getRefinementData(refinementId);
    refinementsStore.set(refinementId, {
      ...filterToToggleIsChecked,
      isChecked: !refinementIsChecked,
    });
  }

  updateRefinementsCheckedStateSequence(label, !refinementIsChecked);
};

export const toggleIsAllRefinementsShown = (facetId: string): void => {
  const current = [...mainStore.get('facetsWithAllRefinementsShownIds')];

  if (current.includes(facetId)) {
    pull(current, facetId);
  } else {
    current.push(facetId);
  }

  mainStore.set('facetsWithAllRefinementsShownIds', current);
};

// for building emitted state
export const getFiltersState = (): Record<
  string,
  FiltrationSmartCheckboxState
> => {
  return Object.values(getRefinements()).reduce((result, filterData) => {
    // TODO: here we should add support if different kinds of filters will be added
    const { isChecked, value } = filterData;

    result[value] = {
      type: 'checkbox',
      value: isChecked,
    };

    return result;
  }, {});
};

export const getFacetRefinementsCheckedWithCountDeep = (
  facetId: string
): { label: string; count: number }[] => {
  const facetCheckedRefinementsData = Object.keys(
    refinementsStoreAsObject
  ).reduce<FiltrationSmartRefinementData[]>((result, refinementId) => {
    const refinementData = getRefinementData(refinementId);

    if (refinementData.rootSectionId === facetId && refinementData.isChecked) {
      result.push(refinementData);
    }

    return result;
  }, []);

  const sortedRefinementsData = facetCheckedRefinementsData.sort((a, b) => {
    return (
      refinementsCheckedStateSequence.indexOf(a.label) -
      refinementsCheckedStateSequence.indexOf(b.label)
    );
  });

  return sortedRefinementsData.map(({ label, count }) => ({
    label,
    count,
  }));
};

export const saveFilterStateOnMobileViewOpen = (): void => {
  filterStateBeforeMobileViewOpen = {
    filter: cloneDeep(refinementsStoreAsObject),
    section: cloneDeep(sectionsStoreAsObject),
  };
};

export const restoreFilterStateOnMobileViewClose = (): void => {
  if (filterStateBeforeMobileViewOpen) {
    Object.entries(filterStateBeforeMobileViewOpen.filter).forEach(
      ([refinementId, refinementData]) => {
        refinementsStore.set(refinementId, { ...refinementData });
      }
    );

    Object.entries(filterStateBeforeMobileViewOpen.section).forEach(
      ([sectionId, sectionData]) => {
        sectionsStore.set(sectionId, { ...sectionData });
      }
    );
  }
};

const initExpandedSections = (rootSectionsIds: string[]): void => {
  const traverser = (sectionsIds: string[]): void => {
    sectionsIds.forEach(sectionId => {
      sectionsExpandedStore.set(sectionId, true);

      const subSectionsIds = getSectionSectionsIds(sectionId);
      traverser(subSectionsIds);
    });
  };

  traverser(rootSectionsIds);
};

const updateExpandedSections = (rootSectionsIds: string[]): void => {
  sectionsExpandedStore.reset();

  const traverser = (sectionsIds: string[]): void => {
    sectionsIds.forEach(sectionId => {
      if (sectionId in sectionsExpandedStoreAsObject) {
        sectionsExpandedStore.set(
          sectionId,
          sectionsExpandedStoreAsObject[sectionId]
        );
      } else {
        sectionsExpandedStore.set(sectionId, true);
      }

      const subSections = getSectionSectionsIds(sectionId);
      traverser(subSections);
    });
  };

  traverser(rootSectionsIds);
};

const updateExpandedSectionsMobile = (rootSectionsIds: string[]): void => {
  const prevSectionsExpandedStoreMobile = {
    ...sectionsExpandedStoreMobileAsObject,
  };

  sectionsExpandedStoreMobile.reset();

  const traverser = (sectionsIds: string[]): void => {
    sectionsIds.forEach(sectionId => {
      if (sectionId in prevSectionsExpandedStoreMobile) {
        sectionsExpandedStoreMobile.set(
          sectionId,
          prevSectionsExpandedStoreMobile[sectionId]
        );
      } else {
        if (rootSectionsIds.includes(sectionId)) {
          sectionsExpandedStoreMobile.set(sectionId, false);
        } else {
          sectionsExpandedStoreMobile.set(sectionId, true);
        }
      }

      const subSections = getSectionSectionsIds(sectionId);
      traverser(subSections);
    });
  };

  traverser(rootSectionsIds);
};

const initExpandedSectionsMobile = (rootSectionsIds: string[]): void => {
  const traverser = (sectionsIds: string[]): void => {
    sectionsIds.forEach(sectionId => {
      sectionsExpandedStoreMobile.set(sectionId, true);
      const subSections = getSectionSectionsIds(sectionId);
      traverser(subSections);
    });
  };

  rootSectionsIds.forEach((rootSectionId: string) => {
    sectionsExpandedStoreMobile.set(rootSectionId, false);

    const subSectionsIds = getSectionSectionsIds(rootSectionId);
    traverser(subSectionsIds);
  });
};

// root filter related stuff
export const setStore = (config: FiltrationSmartStoreInitialConfig): void => {
  const {
    filters,
    visibleFacetsCount: initialVisibleSectionsCount,
    visibleRefinementsPerFacetCount: initialVisibleFiltersPerSectionCount,
    dataAttrsData: filterDataAttrsData,
  } = config;

  if (filterDataAttrsData) {
    dataAttrsData = filterDataAttrsData;
  }

  refinementsStoreAsObject = {};
  sectionsStoreAsObject = {};

  if (filters) {
    Object.entries(filters.entities.filter).forEach(
      ([refinementId, refinementData]) => {
        refinementsStore.set(refinementId, { ...refinementData });
      }
    );

    Object.entries(filters.entities.section).forEach(
      ([sectionId, sectionData]) => {
        sectionsStore.set(sectionId, { ...sectionData });
      }
    );

    mainStore.set('rootSectionsIds', filters.result);
  }

  visibleFacetsCount = initialVisibleSectionsCount || visibleFacetsCount;
  visibleRefinementsPerFacetCount =
    initialVisibleFiltersPerSectionCount || visibleRefinementsPerFacetCount;

  if (!initialFilterState) {
    if (visibleFacetsCount) {
      mainStore.set(
        'isAllFacetsVisible',
        visibleFacetsCount > filters.result.length
      );
    }

    initialFilterState = cloneDeep(filters);
    initExpandedSections(filters.result);
    initExpandedSectionsMobile(filters.result);
  } else {
    updateExpandedSections(filters.result);
    updateExpandedSectionsMobile(filters.result);
  }
};

export const initStore = (config: FiltrationSmartStoreInitialConfig): void => {
  refinementsStore.reset();
  sectionsStore.reset();
  mainStore.reset();
  sectionsExpandedStore.reset();
  sectionsExpandedStoreMobile.reset();

  visibleFacetsCount = Infinity;
  visibleRefinementsPerFacetCount = Infinity;

  initialFilterState = undefined;
  filterStateBeforeMobileViewOpen = undefined;

  setStore(config);
};

export const resetFilterToInitialState = (): void => {
  setStore({ filters: initialFilterState });
};

const updateRefinementsCheckedStateSequence = (
  refinementLabel: string,
  isChecked: boolean
): void => {
  pull(refinementsCheckedStateSequence, refinementLabel);

  if (isChecked) {
    refinementsCheckedStateSequence.push(refinementLabel);
  }
};

export const getIsFilterPristine = (): boolean => {
  return (
    JSON.stringify(initialFilterState) ===
    JSON.stringify({
      entities: {
        filter: Object.keys(refinementsStoreAsObject).reduce((result, key) => {
          result[key] = refinementsStore.get(key);
          return result;
        }, {}),
        section: Object.keys(sectionsStoreAsObject).reduce((result, key) => {
          result[key] = sectionsStore.get(key);
          return result;
        }, {}),
      },
      result: mainStore.get('rootSectionsIds'),
    })
  );
};
