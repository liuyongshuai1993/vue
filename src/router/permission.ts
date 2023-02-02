import router from "./index";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { UserStore } from "@/stores/modules/user";

NProgress.configure({ showSpinner: false }); //禁用进度环

router.beforeEach(async (to, from, next) => {
  // 进度条开始
  NProgress.start();
  const userStore = UserStore();
  const hasToken = userStore.token;
  console.log(userStore);

  // 设置标题
  if (typeof to.meta.title === "string") {
    document.title = to.meta.title || "LYS";
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
