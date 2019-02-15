import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Dashboard from "./pages/Dashboard.vue";
import Icons from "./pages/Icons.vue";

Vue.use(Router);

const base = process.env.NODE_ENV === "production" ? "/demo-vue" : "/";

export default new Router({
  mode: "history",
  base,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "shell" },
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { layout: "shell" },
      component: Dashboard
    },
    {
      path: "/icons",
      name: "icons",
      meta: { layout: "shell" },
      component: Icons
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/404.vue").default // load sync home
    }
  ]
});
