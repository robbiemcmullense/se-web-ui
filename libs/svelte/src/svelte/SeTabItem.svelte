
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let selected = undefined;
export let disabled = undefined;
export let href = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-tab-item 
  selected={selected}
  disabled={disabled}
  href={href}
  
  bind:this={__ref}
>
  <slot></slot>
</se-tab-item>
  