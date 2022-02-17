import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/Home.vue"),
    // component: () => import("@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
