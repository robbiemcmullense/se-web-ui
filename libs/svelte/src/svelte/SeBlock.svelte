
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let divider = undefined;
export let outline = undefined;
export let outlineColor = undefined;
export let corner = undefined;
export let clickable = undefined;
export let clickableBar = undefined;
export let margin = undefined;
export let display = undefined;
export let color = undefined;
export let width = undefined;
export let height = undefined;
export let enlarged = undefined;
export let loading = undefined;
export let option = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-block 
  divider={divider}
  outline={outline}
  outline-color={outlineColor}
  corner={corner}
  clickable={clickable}
  clickable-bar={clickableBar}
  margin={margin}
  display={display}
  color={color}
  width={width}
  height={height}
  enlarged={enlarged}
  loading={loading}
  option={option}
  
  bind:this={__ref}
>
  <slot></slot>
</se-block>
  