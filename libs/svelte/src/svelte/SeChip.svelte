
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let value = undefined;
export let size = undefined;
export let color = undefined;
export let canClose = undefined;
export let selected = undefined;
export let disabled = undefined;
export let readonly = undefined;
export let block = undefined;
export let dashed = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-chip 
  value={value}
  size={size}
  color={color}
  can-close={canClose}
  selected={selected}
  disabled={disabled}
  readonly={readonly}
  block={block}
  dashed={dashed}
  on:didClose={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-chip>
  