<template>
  <SeApp>
    <slot />
  </SeApp>
</template>
<script lang="ts">
import { SeApp } from '@se/web-ui-vue';
export default {
  components: { SeApp },
};
</script>
