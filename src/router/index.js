import { createRouter, createWebHistory } from "vue-router";
import AdminView from "../views/AdminView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // route untuk daftar villa
    {
      path: "/daftarvilla",
      name: "daftarvilla",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DaftarVillaView.vue"),
    },
    // route untuk admin
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
    },
  ],
});

export default router;
