
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let type = undefined;
export let icon = undefined;
export let message = undefined;
export let canClose = undefined;
export let actionText = undefined;
export let open = undefined;
export let duration = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-snackbar 
  type={type}
  icon={icon}
  message={message}
  can-close={canClose}
  action-text={actionText}
  open={open}
  duration={duration}
  on:didClose={onEvent}
  on:actionClicked={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-snackbar>
  