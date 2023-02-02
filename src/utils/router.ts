/*
 * @Description: 
 * @Author: 帅
 * @Date: 2023-02-02 13:23:42
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-02 13:33:03
 */
/**
 *  递归过滤异步路由表
 * @param routes  asyncRoutes
 * @param roles
 */
export const filterAsyncRoutes = (routes, roles) => {
  const res = [];
  routes.forEach(router => {
    const tmp = { ...router }
    if (hasPermission(roles, tmp){
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children,roles)
        }
    }
});
  return res
};

/**\
 * Returns
 * @param roles
 * @param routes
 * 
 */

export const hasPermission = (roles,routes) => {
  if (routes.meta && routes.meta.roles) {
    return roles.some(r => routes.meta.roles.includes(r))
  } else {
  return false
}
};
