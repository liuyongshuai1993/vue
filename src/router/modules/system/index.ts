import Layout from "@/layout/index.vue";
const systemRouter = [
  {
    path: "/system",
    component: Layout,
    redirect: "/system/page",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "setting",
    },
    children: [
      {
        path: "/system/user",
        component: () => import("@/views/system/user/index.vue"),
        name: "system/user",
        meta: {
          title: "用户管理",
          icon: "user",
        },
      },
      {
        path: "/system/role",
        component: () => import("@/views/system/role/index.vue"),
        name: "system/role",
        meta: {
          title: "角色管理",
          icon: "user",
        },
      },
    ],
  },
];

export default systemRouter;
