import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import FullStack0330 from '../views/0330.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fullstack0330",
    name: "fullstack0330",
    component: FullStack0330,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;