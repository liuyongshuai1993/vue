/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-01-31 14:58:49
 * @LastEditors: 帅
 * @LastEditTime: 2023-01-31 16:46:18
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css"; // 暗黑主体css变量
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
