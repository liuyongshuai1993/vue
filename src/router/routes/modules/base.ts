/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-02-02 14:39:38
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-03 16:33:44
 */
import Layout from "@/layout/index.vue";
import type { AppRouteRecordRaw } from "../types";

const baseRoutes: AppRouteRecordRaw = {
  path: "/base",
  component: Layout,
  redirect: "/base/page",
  name: "base",
  meta: {
    title: "基础数据",
    icon: "Document",
  },
  children: [
    {
      path: "/base/user",
      component: () => import("@/views/base/population/index.vue"),
      name: "base/user",
      meta: {
        title: "人口数据",
        icon: "user",
      },
    },
  ],
};

// export default baseRoutes;
