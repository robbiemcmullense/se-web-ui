
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let loading = undefined;
export let option = undefined;
export let color = undefined;
export let overlay = undefined;
export let fullPage = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-loading 
  loading={loading}
  option={option}
  color={color}
  overlay={overlay}
  full-page={fullPage}
  
  bind:this={__ref}
>
  <slot></slot>
</se-loading>
  