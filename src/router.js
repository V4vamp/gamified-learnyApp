import { createRouter, createWebHistory } from "vue-router";
import Start from "./components/Start/Start.vue";
import Quiz from "./components/Quiz/Quiz.vue";
import Result from "./components/Result/Result.vue";

const routes = [
  { path: "/", component: Start },
  { path: "/quiz", redirect: "/question/1" },
  { path: '/question/:id', component: Quiz, props: true },
  { path: '/results', component: Result }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
