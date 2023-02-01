<!--
 * @Description: 
 * @Author: 帅
 * @Date: 2023-02-01 15:39:38
 * @LastEditors: 帅
 * @LastEditTime: 2023-02-01 15:43:40
-->
<template>
  <el-aside width="200px" class="common-aside">
    <div class="logo">
      <img src="@/assets/logo.svg" />
      <h1>LYS测试系统</h1>
    </div>
    <el-scrollbar>
      <el-menu
        active-text-color="#2ddcd3"
        background-color="#0d102c"
        class="el-menu-vertical-demo"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$linear_gradient: linear-gradient(90deg, #1890ff 70%, #77e19d);
$color: #2ddcd3;
.common-aside {
  background: #0d102c;
  overflow: hidden;

  ::v-deep(.el-scrollbar) {
    padding-top: 60px;
  }
  .logo {
    display: flex;
    align-items: center;
    height: 60px;
    width: 200px;
    position: fixed;
    img {
      width: 32px;
      height: 32px;
      margin-right: 10px;
    }
    h1 {
      margin: 0;
      padding: 0;
      color: #fff;
    }
  }
  ::v-deep(.el-menu) {
    background: #0d102c;
    border-right: 0;
  }
  ::v-deep(.el-sub-menu__title) {
    color: #fff;
  }
  ::v-deep(.el-sub-menu__title:hover) {
    background: $linear_gradient;
  }
  ::v-deep(.el-sub-menu .el-sub-menu__icon-arrow) {
    color: $color;
  }
  ::v-deep(.el-icon) {
    color: $color;
  }
  ::v-deep(.el-menu-item:hover) {
    background: $linear_gradient;
  }
}
</style>
