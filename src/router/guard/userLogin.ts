/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-02-03 10:35:54
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-03 11:36:21
 */
import type { Router, LocationQueryRaw } from "vue-router";
import NProgress from "nprogress";
import { isLogin } from "@/utils/auth";
import { UserStore } from "@/stores/modules/user";

/**
 * 用户登陆认证
 *
 */
export default function setupUserLoginGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 进度条开始
    NProgress.start();
    const userStore = UserStore();
    if (isLogin()) {
      // 获取用户信息 有的 直接next 无则重新获取
      if (userStore.role) {
        next();
      } else {
        try {
          next();
        } catch (error) {
          // 退出至登陆 清空
          next({
            name: "login",
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          });
        }
      }
    } else {
      if (to.name === "login") {
        next();
        return;
      }
      next({
        name: "login",
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
