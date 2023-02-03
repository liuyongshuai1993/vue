/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-02-02 10:05:27
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-03 17:24:37
 */
import type { Router } from "vue-router";
import NProgress from "nprogress";
import { UserStore } from "@/stores/modules/user";
import { useAppStore } from "@/stores/modules/app";

export default function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const userStore = UserStore();
    const appStore = useAppStore();
    const hasToken = userStore.token;
    console.log(document);

    // 设置标题
    if (typeof to.meta.title === "string") {
      document.title = to.meta.title || "LYS";
    }
    // 判断异步路由 白名单
    if (!appStore.appAsyncMenus.length) {
      await appStore.featchServerMenu();
    }
    if (hasToken) {
      // if (to.path === "/login") { // 已经登陆直接重定向首页
      //   next("/");
      // }
      try {
        console.log(11);
      } catch (error) {
        next(`/login="redirect=${to.path}`);
      }
      next();
    } else {
      // 又没u有白名单
      // `login="redirect=${to..path}`"
      next();
    }
  });

  // 后置钩子 用于结束 页面进度条
  router.afterEach((to, from) => {
    NProgress.done();
  });
}
