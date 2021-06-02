
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let item = undefined;
export let description = undefined;
export let selected = undefined;
export let disabled = undefined;
export let icon = undefined;
export let iconColor = undefined;
export let href = undefined;

export const focusElement = (...args) => __ref.focusElement(...args);
export const blurElement = (...args) => __ref.blurElement(...args);
export const setOption = (...args) => __ref.setOption(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-list-item 
  item={item}
  description={description}
  selected={selected}
  disabled={disabled}
  icon={icon}
  icon-color={iconColor}
  href={href}
  on:didSelectedChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-list-item>
  