import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  linkActiveClass: "text-tiffinTextYellow font-semibold",
  linkExactActiveClass: "border-indigo-700",
  history: createWebHistory(),
  routes,
});

export default router;
