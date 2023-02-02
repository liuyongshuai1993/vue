import type { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: "/:pathMatch(.*)*",
  name: "notFound",
  component: () => import("@/views/notFound/index.vue"),
};

export const REDIRECT_MAIN: RouteRecordRaw = {
  path: "/redirect",
  name: "redirectWrapper",
  component: Layout,
  children: [
    {
      path: "/redirect/:path",
      name: "Redirect",
      component: () => import("@/views/redirect/index.vue"),
      meta: {
        requiresAuth: true,
        hideInMenu: true,
      },
    },
  ],
};
