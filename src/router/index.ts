import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Test from "@/components/views/Test.vue";
import Scores from "@/components/views/Scores.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Test",
    component: Test,
  },
  {
    path: "/scores",
    name: "Scores",
    component: Scores,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
