
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let name = undefined;
export let value = undefined;
export let label = undefined;
export let required = undefined;
export let color = undefined;
export let padding = undefined;
export let disabled = undefined;
export let selected = undefined;
export let labelPos = undefined;

export const setRequired = (...args) => __ref.setRequired(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
  if (e.type === 'didChange') { selected = e.detail; }
};
</script>

<se-radio 
  name={name}
  value={value}
  label={label}
  required={required}
  color={color}
  padding={padding}
  disabled={disabled}
  selected={selected}
  label-pos={labelPos}
  on:didCheck={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-radio>
  