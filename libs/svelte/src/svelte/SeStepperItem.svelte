
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let label = undefined;
export let active = undefined;
export let interactive = undefined;
export let validated = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-stepper-item 
  label={label}
  active={active}
  interactive={interactive}
  validated={validated}
  on:didValidate={onEvent}
  on:didActivate={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-stepper-item>
  