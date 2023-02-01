<!--
 * @Description:  
 * @Author: 帅
 * @Date: 2023-01-31 16:27:21
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-01 15:28:26
-->
<template>
  <el-container class="common-container">
    <el-container>
      <Menu></Menu>
      <el-container>
        <Header></Header>
        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition || 'fade'" mode="out-in">
              <keep-alive>
                <suspense>
                  <template #default>
                    <component
                      :is="Component"
                      :key="route.meta.usePathKey ? route.path : undefined"
                    />
                  </template>
                  <template #fallback> Loading... </template>
                </suspense>
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
        <el-footer>
          <span href="/" target="_blank">
            2022 © LYS-VUE-PERFECT By ZB Technology.
          </span>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "./header/index.vue";
import Menu from "./menu/index.vue";
</script>

<style lang="scss" scoped>
.common-container {
  height: 100%;
}
::v-deep(.el-footer) {
  height: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-top: 1px solid #e4e7ed;
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.45);
}
::v-deep(.el-main) {
  background: #fff;
}
</style>
