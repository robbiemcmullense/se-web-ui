
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let resetButtonLabel;
export let isVisible;
export let headerLabel = undefined;
export let showProductsLabel;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-filtration-smart-mobile-view 
  reset-button-label={resetButtonLabel}
  is-visible={isVisible}
  header-label={headerLabel}
  show-products-label={showProductsLabel}
  on:toggleMobileView={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-filtration-smart-mobile-view>
  