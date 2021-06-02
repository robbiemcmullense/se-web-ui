
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let imageUrl = undefined;
export let active = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-banner-item 
  image-url={imageUrl}
  active={active}
  on:didChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-banner-item>
  