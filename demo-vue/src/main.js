import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { defineCustomElements, applyPolyfills } from "@se/web-ui/loader";
import Default from "./layouts/Default.vue";
import Shell from "./layouts/Shell.vue";

// protect <se-*></se-*> component for being interpreted by VUE
Vue.config.ignoredElements = [/^se-/];

// Add custom element definition to the windows
// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

Vue.component("default-layout", Default);
Vue.component("shell-layout", Shell);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
