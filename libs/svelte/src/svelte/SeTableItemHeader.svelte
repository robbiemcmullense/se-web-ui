
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let flex = undefined;
export let width = undefined;
export let minWidth = undefined;
export let clickable = undefined;
export let sort = undefined;
export let resizable = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-table-item-header 
  flex={flex}
  width={width}
  min-width={minWidth}
  clickable={clickable}
  sort={sort}
  resizable={resizable}
  on:didWidthChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-table-item-header>
  