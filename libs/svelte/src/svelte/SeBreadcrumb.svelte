
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let canSelectLast = undefined;
export let ariaLabel = undefined;
export let breakpoint = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-breadcrumb 
  can-select-last={canSelectLast}
  aria-label={ariaLabel}
  breakpoint={breakpoint}
  
  bind:this={__ref}
>
  <slot></slot>
</se-breadcrumb>
  