
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let stacked = undefined;
export let padding = undefined;
export let block = undefined;
export let labelWidth = undefined;
export let labelAlign = undefined;
export let type = undefined;
export let status = undefined;
export let label = undefined;
export let textOnly = undefined;
export let value = undefined;
export let required = undefined;
export let disabled = undefined;
export let noStacking = undefined;
export let minWidth = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-form-field 
  option={option}
  stacked={stacked}
  padding={padding}
  block={block}
  label-width={labelWidth}
  label-align={labelAlign}
  type={type}
  status={status}
  label={label}
  text-only={textOnly}
  value={value}
  required={required}
  disabled={disabled}
  no-stacking={noStacking}
  min-width={minWidth}
  on:didSubmit={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-form-field>
  