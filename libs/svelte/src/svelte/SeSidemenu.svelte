
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let disabled = undefined;
export let label = undefined;
export let link = undefined;

export const toggle = (...args) => __ref.toggle(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-sidemenu 
  disabled={disabled}
  label={label}
  link={link}
  on:toggled={onEvent}
  on:didNavigationClick={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-sidemenu>
  