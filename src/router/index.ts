/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-01-31 14:58:49
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-01 09:46:32
 */
/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-01-31 14:58:49
 * @LastEditors: 帅
 * @LastEditTime: 2023-01-31 16:25:40
 */
/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-01-31 14:58:49
 * @LastEditors: 帅
 * @LastEditTime: 2023-01-31 16:22:18
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";

const baseRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/error/404.vue"),
  },
  {
    path: "/403",
    name: "403",
    component: () => import("../views/error/403.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/index.vue"),
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        ...baseRouter,
      ],
    },
  ],
});

export default router;
