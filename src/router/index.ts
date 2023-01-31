/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-01-31 14:58:49
 * @LastEditors: 帅
 * @LastEditTime: 2023-01-31 16:27:07
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
import HomeView from "../views/HomeView.vue";

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
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    ...baseRouter,
  ],
});

export default router;
