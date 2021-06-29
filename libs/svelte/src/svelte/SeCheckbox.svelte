
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let name = undefined;
export let value = undefined;
export let label = undefined;
export let labelSuffix = undefined;
export let required = undefined;
export let color = undefined;
export let disabled = undefined;
export let indeterminate = undefined;
export let selected = undefined;
export let textOn = undefined;
export let textOff = undefined;
export let header = undefined;
export let padding = undefined;
export let labelPos = undefined;
export let size = undefined;

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

<se-checkbox 
  option={option}
  name={name}
  value={value}
  label={label}
  label-suffix={labelSuffix}
  required={required}
  color={color}
  disabled={disabled}
  indeterminate={indeterminate}
  selected={selected}
  text-on={textOn}
  text-off={textOff}
  header={header}
  padding={padding}
  label-pos={labelPos}
  size={size}
  on:didChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-checkbox>
  