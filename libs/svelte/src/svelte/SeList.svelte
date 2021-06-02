
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let selectedColor = undefined;
export let canCollapse = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-list 
  option={option}
  selected-color={selectedColor}
  can-collapse={canCollapse}
  
  bind:this={__ref}
>
  <slot></slot>
</se-list>
  