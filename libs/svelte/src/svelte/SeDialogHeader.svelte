
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let color = undefined;
export let closeIcon = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-dialog-header 
  option={option}
  color={color}
  close-icon={closeIcon}
  on:didCloseDialog={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-dialog-header>
  