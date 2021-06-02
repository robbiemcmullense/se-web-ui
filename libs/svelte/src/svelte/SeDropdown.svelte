
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let alignment = undefined;
export let verticalAlignment = undefined;
export let maxWidth = undefined;
export let maxHeight = undefined;
export let action = undefined;

export const open = (...args) => __ref.open(...args);
export const close = (...args) => __ref.close(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-dropdown 
  alignment={alignment}
  vertical-alignment={verticalAlignment}
  max-width={maxWidth}
  max-height={maxHeight}
  action={action}
  on:didOpen={onEvent}
  on:didClose={onEvent}
  on:cancelAllDropdown={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-dropdown>
  