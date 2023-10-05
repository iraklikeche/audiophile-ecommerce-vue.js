import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/category/:category",
      name: "category",
      component: () => import("../views/ProductsByCategory.vue"),
    },
    {
      path: "/product/:product",
      name: "product",
      component: () => import("../views/ProductDetails.vue"),
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue"),
    },
  ],
});

export default router;
