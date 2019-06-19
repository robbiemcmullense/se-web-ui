import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { defineCustomElements } from "@se/web-ui/loader"; // "@se/web-ui/core/loader"
import Default from "./layouts/Default.vue";
import Shell from "./layouts/Shell.vue";

// Add custom element definition to the windows
defineCustomElements(window);

Vue.component("default-layout", Default);
Vue.component("shell-layout", Shell);

Vue.config.productionTip = false;

// protect <se-*></se-*> component for being interpreted by VUE
Vue.config.ignoredElements = [/^se-/];

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
