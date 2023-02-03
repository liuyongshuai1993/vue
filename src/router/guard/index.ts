import type { Router } from "vue-router";
import setupUserLoginGuard from "./userLogin";
import setupPermissionGuard from "./permission";

export default function createRouteGuard(router: Router) {
  // 拆分用户权限 登陆 or 路由
  setupUserLoginGuard(router);
  setupPermissionGuard(router);
}
