import { createRouter, createWebHistory } from "vue-router";
import Start from "./components/Start/Start.vue";
import Quiz from "./components/Quiz/Quiz.vue";
import Result from "./components/Result/Result.vue";
import Preview from "./components/Preview/Preview.vue";
import PreviewResult from "./components/Result/PreviewResult.vue";

const routes = [
  { path: "/", component: Start },
  { path: "/quiz", redirect: "/question/1" },
  { path: '/question/:id', component: Quiz, props: true },
  { path: '/results', component: Result },
  { path: "/course-preview/:id", component: Preview, props: true },
  { path: '/preview-results', component: PreviewResult },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
