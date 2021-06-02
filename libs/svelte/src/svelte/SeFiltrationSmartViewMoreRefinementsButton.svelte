
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let facetId;
export let isAllRefinementsVisible = undefined;
export let count = undefined;
export let viewMoreLabel = undefined;
export let viewLessLabel = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration-smart-view-more-refinements-button 
  facet-id={facetId}
  is-all-refinements-visible={isAllRefinementsVisible}
  count={count}
  view-more-label={viewMoreLabel}
  view-less-label={viewLessLabel}
  on:toggleViewMoreRefinements={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart-view-more-refinements-button>
  