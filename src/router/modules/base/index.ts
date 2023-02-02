/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-02-02 09:31:07
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-02 09:38:28
 */
import Layout from "@/layout/index.vue";
const baseRoutes = [
  {
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
        name: "system/user",
        meta: {
          title: "人口数据",
          icon: "user",
        },
      },
    ],
  },
];

export default baseRoutes;
