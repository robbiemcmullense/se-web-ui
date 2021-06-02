
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let label;
export let disabled = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration-smart-reset-button 
  label={label}
  disabled={disabled}
  on:resetAllClicked={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart-reset-button>
  