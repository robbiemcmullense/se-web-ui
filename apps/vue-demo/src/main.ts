import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Default from './layouts/Default.vue';
import Shell from './layouts/Shell.vue';

Vue.component('default-layout', Default);
Vue.component('shell-layout', Shell);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
