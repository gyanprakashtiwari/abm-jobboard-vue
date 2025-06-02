import { createRouter, createWebHistory } from "vue-router";
import JobList from "../pages/JobList.vue";
import JobDetail from "../pages/JobDetail.vue";
import PostJob from "../pages/PostJob.vue";

const routes = [
  { path: "/", component: JobList },
  { path: "/jobs/:id", component: JobDetail, props: true },
  { path: "/post-job", component: PostJob },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
