
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let filters;
export let resetButtonLabel;
export let showProductsLabel;
export let viewMoreRefinementsLabel;
export let viewLessRefinementsLabel;
export let viewMoreFacetsLabel;
export let viewLessFacetsLabel;
export let visibleFacetsCount = undefined;
export let visibleRefinementsPerFacetCount = undefined;
export let headerLabelDesktop = undefined;
export let headerLabelMobile = undefined;
export let isMobileViewVisible = undefined;
export let maxFacetContentHeight = undefined;

export const reset = (...args) => __ref.reset(...args);
export const setIsFilterChecked = (...args) => __ref.setIsFilterChecked(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };

$: if (__mounted) setProp('filters', filters);

const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration-smart 
  reset-button-label={resetButtonLabel}
  show-products-label={showProductsLabel}
  view-more-refinements-label={viewMoreRefinementsLabel}
  view-less-refinements-label={viewLessRefinementsLabel}
  view-more-facets-label={viewMoreFacetsLabel}
  view-less-facets-label={viewLessFacetsLabel}
  visible-facets-count={visibleFacetsCount}
  visible-refinements-per-facet-count={visibleRefinementsPerFacetCount}
  header-label-desktop={headerLabelDesktop}
  header-label-mobile={headerLabelMobile}
  is-mobile-view-visible={isMobileViewVisible}
  max-facet-content-height={maxFacetContentHeight}
  on:filterStateChanged={onEvent}
  on:seFiltrationSmartDidRender={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart>
  