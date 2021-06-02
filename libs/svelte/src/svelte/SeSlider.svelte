
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let value = undefined;
export let min = undefined;
export let max = undefined;
export let label = undefined;
export let disabled = undefined;

export const setDisabled = (...args) => __ref.setDisabled(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
  if (e.type === 'didChange') { value = e.detail; }
};
</script>

<se-slider 
  value={value}
  min={min}
  max={max}
  label={label}
  disabled={disabled}
  on:didChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-slider>
  