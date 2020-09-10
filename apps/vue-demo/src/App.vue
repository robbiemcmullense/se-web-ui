<template>
  <se-app>
    <component :is="layout">
      <router-view />
    </component>
  </se-app>
</template>

<script lang="ts">
import { SeApp } from '@se/web-ui-vue';

const defaultLayout = 'default';

export default {
  components: { SeApp },
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout';
    },
  },

  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },

  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  },
};
</script>

<style lang="scss">
$se-icon-folder: '~@se/icons/fonts';
@import '~@se/icons/scss/styles';
$se-fonts-path: '~@se/fonts/fonts';
@import '~@se/fonts/scss/styles';
</style>
