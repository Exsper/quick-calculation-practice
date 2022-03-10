import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import AddQuestion from "../components/AddQuestion.vue";
import MulQuestion from "../components/MulQuestion.vue";
import Deci2frac from "../components/Deci2frac.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: AddQuestion,
  },
  {
    path: "/mul",
    name: "Mul",
    component: MulQuestion,
  },
  {
    path: "/frac",
    name: "Frac",
    component: Deci2frac,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
