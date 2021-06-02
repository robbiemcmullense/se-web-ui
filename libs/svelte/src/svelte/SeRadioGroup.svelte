
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let color = undefined;
export let size = undefined;
export let direction = undefined;
export let disabled = undefined;
export let value = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
  if (e.type === 'didChange') { value = e.detail; }
};
</script>

<se-radio-group 
  color={color}
  size={size}
  direction={direction}
  disabled={disabled}
  value={value}
  on:didChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-radio-group>
  