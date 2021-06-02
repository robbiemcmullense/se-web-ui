
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let appTitle = undefined;
export let domain = undefined;
export let project = undefined;
export let hideSeLogo = undefined;
export let disabled = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-header 
  app-title={appTitle}
  domain={domain}
  project={project}
  hide-se-logo={hideSeLogo}
  disabled={disabled}
  
  bind:this={__ref}
>
  <slot></slot>
</se-header>
  