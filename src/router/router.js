import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/jobs/results",
    name: "job-results",
    component: () => import("@/views/JobResultsView.vue"),
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: () => import("@/views/JobView.vue"),
  },
  {
    path: "/teams",
    name: "Teams",
    component: () => import("@/views/TeamsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: "smooth" });
      }, 500);
    });
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
