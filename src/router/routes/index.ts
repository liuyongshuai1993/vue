import type { RouteRecordNormalized } from "vue-router";

// 获取modules下的全部
const modules = import.meta.glob("./modules/*.ts", { eager: true });
// 获取外部文件
const externalModules = import.meta.glob("./externalModules/*.ts", {
  eager: true,
});

//文件路由导入
function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModules = _modules[key].default;
    if (!defaultModules) return;
    const moduleList = Array.isArray(defaultModules)
      ? [...defaultModules]
      : [defaultModules];
    result.push(...moduleList);
  });
  console.log("formatModules", result);

  return result;
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);
export const externalRoutes: RouteRecordNormalized[] = formatModules(
  externalModules,
  []
);
