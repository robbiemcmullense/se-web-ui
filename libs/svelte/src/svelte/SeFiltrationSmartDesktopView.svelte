
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let resetButtonLabel;
export let viewMoreRefinementsLabel;
export let viewLessRefinementsLabel;
export let viewMoreFacetsLabel;
export let viewLessFacetsLabel;
export let headerLabel = undefined;
export let maxFacetContentHeight = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration-smart-desktop-view 
  reset-button-label={resetButtonLabel}
  view-more-refinements-label={viewMoreRefinementsLabel}
  view-less-refinements-label={viewLessRefinementsLabel}
  view-more-facets-label={viewMoreFacetsLabel}
  view-less-facets-label={viewLessFacetsLabel}
  header-label={headerLabel}
  max-facet-content-height={maxFacetContentHeight}
  
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart-desktop-view>
  