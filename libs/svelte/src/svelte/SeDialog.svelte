
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let size = undefined;
export let color = undefined;
export let open = undefined;
export let canBackdrop = undefined;
export let noBackdrop = undefined;
export let pageScroll = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-dialog 
  size={size}
  color={color}
  open={open}
  can-backdrop={canBackdrop}
  no-backdrop={noBackdrop}
  page-scroll={pageScroll}
  on:backdrop={onEvent}
  on:didClose={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-dialog>
  