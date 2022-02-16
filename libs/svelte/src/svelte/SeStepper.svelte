
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let color = undefined;
export let linear = undefined;
export let block = undefined;
export let interactive = undefined;
export let labelMaxWidth = undefined;
export let stacked = undefined;
export let spacing = undefined;

export const reset = (...args) => __ref.reset(...args);
export const previous = (...args) => __ref.previous(...args);
export const next = (...args) => __ref.next(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-stepper 
  color={color}
  linear={linear}
  block={block}
  interactive={interactive}
  label-max-width={labelMaxWidth}
  stacked={stacked}
  spacing={spacing}
  on:didChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-stepper>
  