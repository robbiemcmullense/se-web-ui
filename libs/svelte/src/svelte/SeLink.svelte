
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let url = undefined;
export let disabled = undefined;
export let download = undefined;
export let option = undefined;
export let unicolor = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-link 
  url={url}
  disabled={disabled}
  download={download}
  option={option}
  unicolor={unicolor}
  
  bind:this={__ref}
>
  <slot></slot>
</se-link>
  