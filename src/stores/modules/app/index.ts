import { defineStore } from "pinia";
import type { AppState } from "./types";
import type { RouteRecordNormalized } from "vue-router";
import Layout from "@/layout/index.vue";
import defaultSettings from "@/config/settings.json";

export const useAppStore = defineStore({
  id: "app",
  state: () => {
    return {
      ...defaultSettings,
    };
  },
  getters: {
    appAsyncMenus(state: AppState): RouteRecordNormalized[] {
      return state.serverMenu as unknown as RouteRecordNormalized[];
    },
  },
  actions: {
    async featchServerMenu() {
      try {
        // 接口获取菜单
        this.serverMenu = [];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
