
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let isAllFacetsVisible;
export let count;
export let viewMoreLabel;
export let viewLessLabel;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration-smart-view-more-facets-button 
  is-all-facets-visible={isAllFacetsVisible}
  count={count}
  view-more-label={viewMoreLabel}
  view-less-label={viewLessLabel}
  on:toggleViewMoreFacets={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart-view-more-facets-button>
  