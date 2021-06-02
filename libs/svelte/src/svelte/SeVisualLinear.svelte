
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let label = undefined;
export let value = undefined;
export let secolor = undefined;
export let percentage = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-visual-linear 
  option={option}
  label={label}
  value={value}
  secolor={secolor}
  percentage={percentage}
  
  bind:this={__ref}
>
  <slot></slot>
</se-visual-linear>
  