<template>
  <se-app>
    <component :is="layout">
      <router-view />
    </component>
  </se-app>
</template>

<script>
const default_layout = "default";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },

  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },

  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  }
};
</script>

<style lang="scss">
$se-icon-folder: "~@se/icons/fonts";
@import "~@se/icons/scss/styles";
$se-fonts-path: "~@se/fonts/fonts";
@import "~@se/fonts/scss/styles";

</style>
