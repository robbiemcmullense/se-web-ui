
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let item = undefined;
export let description = undefined;
export let selected = undefined;
export let icon = undefined;
export let iconColor = undefined;
export let collapsed = undefined;
export let indentation = undefined;
export let disabled = undefined;
export let flex = undefined;
export let canCollapse = undefined;

export const toggleCollapseTreeview = (...args) => __ref.toggleCollapseTreeview(...args);
export const focusElement = (...args) => __ref.focusElement(...args);
export const setOption = (...args) => __ref.setOption(...args);

export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<se-list-group 
  item={item}
  description={description}
  selected={selected}
  icon={icon}
  icon-color={iconColor}
  collapsed={collapsed}
  indentation={indentation}
  disabled={disabled}
  flex={flex}
  can-collapse={canCollapse}
  on:didGroupClick={onEvent}
  on:didGroupCollapse={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</se-list-group>
  