
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let perPage = undefined;
export let perPageList = undefined;
export let value = undefined;
export let total = undefined;
export let hideEdge = undefined;
export let labelFirst = undefined;
export let labelPrev = undefined;
export let labelNext = undefined;
export let labelLast = undefined;
export let labelPerPage = undefined;
export let labelValue = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-pagination 
  per-page={perPage}
  per-page-list={perPageList}
  value={value}
  total={total}
  hide-edge={hideEdge}
  label-first={labelFirst}
  label-prev={labelPrev}
  label-next={labelNext}
  label-last={labelLast}
  label-per-page={labelPerPage}
  label-value={labelValue}
  on:didChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-pagination>
  