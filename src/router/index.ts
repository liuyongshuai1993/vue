/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-01-31 14:58:49
 * @LastEditors: 帅
 * @LastEditTime: 2023-01-31 16:22:18
 */
import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { NOT_FOUND_ROUTE, REDIRECT_MAIN } from "./routes/base";
import { appRoutes } from "./routes";
import createRouteGuard from "./guard";

NProgress.configure({ showSpinner: false }); //禁用进度环
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/login.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,
    NOT_FOUND_ROUTE,
    REDIRECT_MAIN,
  ],
});
createRouteGuard(router);
export default router;
