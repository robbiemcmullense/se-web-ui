
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let size = undefined;
export let color = undefined;
export let disabled = undefined;
export let animation = undefined;
export let rotate = undefined;
export let mirror = undefined;
export let hoverColor = undefined;
export let noHover = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-icon 
  option={option}
  size={size}
  color={color}
  disabled={disabled}
  animation={animation}
  rotate={rotate}
  mirror={mirror}
  hover-color={hoverColor}
  no-hover={noHover}
  
  bind:this={__ref}
>
  <slot></slot>
</se-icon>
  