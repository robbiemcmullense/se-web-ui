
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let position = undefined;
export let action = undefined;
export let color = undefined;
export let showDelay = undefined;

export const open = (...args) => __ref.open(...args);
export const close = (...args) => __ref.close(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-tooltip 
  position={position}
  action={action}
  color={color}
  show-delay={showDelay}
  on:didOpen={onEvent}
  on:didClose={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-tooltip>
  