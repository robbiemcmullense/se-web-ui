
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let label;
export let count = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration-smart-mobile-view-trigger 
  label={label}
  count={count}
  on:toggleMobileView={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart-mobile-view-trigger>
  