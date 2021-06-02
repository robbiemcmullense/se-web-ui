
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let item = undefined;
export let labelHint = undefined;
export let collapsed = undefined;
export let shadow = undefined;
export let labelViewMore = undefined;
export let labelViewLess = undefined;
export let labelSelectAll = undefined;
export let minItems = undefined;
export let maxItems = undefined;
export let showSelectAll = undefined;
export let searchable = undefined;
export let search = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration 
  item={item}
  label-hint={labelHint}
  collapsed={collapsed}
  shadow={shadow}
  label-view-more={labelViewMore}
  label-view-less={labelViewLess}
  label-select-all={labelSelectAll}
  min-items={minItems}
  max-items={maxItems}
  show-select-all={showSelectAll}
  searchable={searchable}
  search={search}
  on:didSearch={onEvent}
  on:didSelectAll={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration>
  