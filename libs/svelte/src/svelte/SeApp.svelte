
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let option = undefined;
export let pageScroll = undefined;
export let theme = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-app 
  option={option}
  page-scroll={pageScroll}
  theme={theme}
  on:themeChanged={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-app>
  