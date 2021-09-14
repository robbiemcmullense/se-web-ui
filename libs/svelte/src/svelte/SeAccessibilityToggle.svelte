
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let selected = undefined;
export let labelModeOn = undefined;
export let labelModeOff = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-accessibility-toggle 
  selected={selected}
  label-mode-on={labelModeOn}
  label-mode-off={labelModeOff}
  on:didChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-accessibility-toggle>
  