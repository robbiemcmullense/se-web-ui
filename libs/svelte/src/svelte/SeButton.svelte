
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let size = undefined;
export let color = undefined;
export let value = undefined;
export let icon = undefined;
export let iconColor = undefined;
export let iconOnly = undefined;
export let type = undefined;
export let padding = undefined;
export let disabled = undefined;
export let selected = undefined;
export let caption = undefined;
export let block = undefined;

export const setDisabled = (...args) => __ref.setDisabled(...args);
export const setGrouped = (...args) => __ref.setGrouped(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-button 
  option={option}
  size={size}
  color={color}
  value={value}
  icon={icon}
  icon-color={iconColor}
  icon-only={iconOnly}
  type={type}
  padding={padding}
  disabled={disabled}
  selected={selected}
  caption={caption}
  block={block}
  on:didClick={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-button>
  