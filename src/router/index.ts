import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowDetailsView from "../views/ShowDetailsView.vue";
import AllShowsByGenreView from "../views/AllShowsByGenreView.vue";
import ShowsSearchView from "../views/ShowsSearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/show/:id',
      name: "showDetails",
      component: () => import("../views/ShowDetailsView.vue"),
    },
    {
      path: '/genres/:genre',
      name: "allShowsByGenre",
      component: () => import("../views/AllShowsByGenreView.vue"),
    },
    {
      path: '/search/shows/:searchTerm',
      name: "ShowsSearchView",
      component: () => import("../views/ShowsSearchView.vue"),
    },
  ],
});

export default router;
