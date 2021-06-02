
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let count = undefined;
export let width = undefined;
export let height = undefined;
export let circle = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-skeleton 
  count={count}
  width={width}
  height={height}
  circle={circle}
  
  bind:this={__ref}
>
  <slot></slot>
</se-skeleton>
  