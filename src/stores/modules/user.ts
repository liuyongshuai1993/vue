import { defineStore } from "pinia";

export const UserStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: "userState",
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      token: "isTokenData",
      userInfo: null,
      role: "admin",
    };
  },
});
