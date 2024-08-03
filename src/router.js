import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Menu from "./views/Menu.vue";
import Contact from "./views/Contact.vue";
import Events from "./views/Events.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/events",
    component: Events,
  },
];

const router = createRouter({
  linkActiveClass: "text-tiffinYellow font-semibold",
  linkExactActiveClass: "border-indigo-700",
  history: createWebHistory(),
  routes,
});

export default router;
