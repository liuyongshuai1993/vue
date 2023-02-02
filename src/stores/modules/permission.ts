import { defineStore } from "pinia";
import { asyncRoutes, notFoundRouter, constRouter } from "@/router/index";
import { filterAsyncRoutes } from "@/utils/router";

export const PermissionStore = defineStore({
  id: "permissionStore",
  state: () => {
    return {
      //全路由
      routes: [],
      // 获取异步路由
      asyncRoutes: [],
      // 缓存路由
      cacheRoutes: [],
    };
  },
  getters: {
    permission_routes: (state) => state.routes,
  },
  // 可以同步 异步 数据
  actions: {
    generateRoutes(roles) {
      return new Promise((resolve, reject) => {
        let accessedRoutes;
        if (roles && roles.length && roles.includes("admin")) {
          accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        } else {
          accessedRoutes = asyncRoutes || [];
        }
        accessedRoutes = accessedRoutes.concat(notFoundRouter);
        this.routes = constRouter.concat(accessedRoutes);
        this.asyncRoutes = accessedRoutes;
        resolve(accessedRoutes);
      });
    },
    elearRoutes() {
      this.routes = [];
      this.asyncRoutes = [];
      this.cacheRoutes = [];
    },
  },
});
