import Layout from "@/layout/index.vue";
import type { AppRouteRecordRaw } from "../types";

const homeRouter: AppRouteRecordRaw = {
  path: "/",
  name: "home",
  component: Layout,
  redirect: "/home",
  children: [
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/index.vue"),
      meta: { affix: true, icon: "House", role: [], title: "首页" },
    },
    {
      path: "/about",
      name: "AboutView",
      component: () => import("@/views/AboutView.vue"),
      meta: { affix: true, icon: "House", role: [], title: "关于" },
    },
  ],
};

export default homeRouter;
