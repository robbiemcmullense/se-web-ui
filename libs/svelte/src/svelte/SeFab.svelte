
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let icon = undefined;
export let option = undefined;
export let position = undefined;
export let color = undefined;
export let overlay = undefined;

export const toggleAction = (...args) => __ref.toggleAction(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-fab 
  icon={icon}
  option={option}
  position={position}
  color={color}
  overlay={overlay}
  on:closeTooltips={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-fab>
  