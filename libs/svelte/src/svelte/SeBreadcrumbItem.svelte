
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let isLast = undefined;
export let href = undefined;
export let canSelect = undefined;
export let position = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-breadcrumb-item 
  is-last={isLast}
  href={href}
  can-select={canSelect}
  position={position}
  on:didNavigate={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-breadcrumb-item>
  