
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let facetId;
export let isMobile = undefined;
export let maxContentHeight = undefined;
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

<se-filtration-smart-facet 
  facet-id={facetId}
  is-mobile={isMobile}
  max-content-height={maxContentHeight}
  view-more-label={viewMoreLabel}
  view-less-label={viewLessLabel}
  on:toggleIsSectionExpanded={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart-facet>
  