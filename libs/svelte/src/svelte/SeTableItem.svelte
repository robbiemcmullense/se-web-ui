
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let flex = undefined;
export let width = undefined;
export let minWidth = undefined;
export let clickable = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-table-item 
  option={option}
  flex={flex}
  width={width}
  min-width={minWidth}
  clickable={clickable}
  
  bind:this={__ref}
>
  <slot></slot>
</se-table-item>
  