<template>
  <SeApp>
    <slot />
  </SeApp>
</template>
<script>
import { SeApp } from '@se/web-ui-vue';
export default {
  components: { SeApp },
};
</script>
