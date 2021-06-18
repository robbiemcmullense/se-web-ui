
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let padding = undefined;
export let icon = undefined;
export let iconColor = undefined;
export let isLastChild = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-dialog-content 
  option={option}
  padding={padding}
  icon={icon}
  icon-color={iconColor}
  is-last-child={isLastChild}
  
  bind:this={__ref}
>
  <slot></slot>
</se-dialog-content>
  