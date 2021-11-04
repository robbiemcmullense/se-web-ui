
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let position = undefined;
export let direction = undefined;
export let display = undefined;
export let padding = undefined;
export let gap = undefined;
export let columnSize = undefined;
export let rowSize = undefined;
export let color = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-container 
  option={option}
  position={position}
  direction={direction}
  display={display}
  padding={padding}
  gap={gap}
  column-size={columnSize}
  row-size={rowSize}
  color={color}
  
  bind:this={__ref}
>
  <slot></slot>
</se-container>
  