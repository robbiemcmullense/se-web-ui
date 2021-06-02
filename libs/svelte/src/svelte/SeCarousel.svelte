
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let itemMinWidth = undefined;
export let arrowsOverlay = undefined;
export let hintWidth = undefined;
export let pagination = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-carousel 
  item-min-width={itemMinWidth}
  arrows-overlay={arrowsOverlay}
  hint-width={hintWidth}
  pagination={pagination}
  
  bind:this={__ref}
>
  <slot></slot>
</se-carousel>
  