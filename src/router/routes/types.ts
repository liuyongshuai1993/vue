/*
 * @Description:
 * @Author: 帅
 * @Date: 2023-02-02 14:02:07
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-02 14:07:00
 */
import type { defineComponent } from "vue";

import type { RouteMeta, NavigationGuard } from "vue-router";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw {
  path: string;
  name?: string | symbol;
  meta?: RouteMeta;
  redirect?: string;
  component: Component | string;
  children?: AppRouteRecordRaw[];
  alias?: string | string[];
  props?: Record<string, any>;
  beforeEnter?: NavigationGuard | NavigationGuard[];
  fullPath?: string;
}
