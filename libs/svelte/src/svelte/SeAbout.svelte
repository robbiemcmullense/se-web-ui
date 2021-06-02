
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let appTitle = undefined;
export let version = undefined;
export let domain = undefined;
export let copyright = undefined;
export let imageUrl = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-about 
  app-title={appTitle}
  version={version}
  domain={domain}
  copyright={copyright}
  image-url={imageUrl}
  
  bind:this={__ref}
>
  <slot></slot>
</se-about>
  