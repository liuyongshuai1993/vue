<template>
  <el-header class="common-head display">
    <div class="common-head-left display">
      <div class="collapse display">
        <el-icon size="32"><Expand /></el-icon>
        <!-- <el-icon><Fold /></el-icon> -->
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="common-head-right display">
      <el-dropdown>
        <span class="el-dropdown-link display">
          <el-avatar
            class="mr-3"
            :size="32"
            style="margin-right: 5px"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          admin
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon><UserFilled /></el-icon>
              <span>管理员</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><SwitchButton /></el-icon>
              <span>退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
  <TagView></TagView>
</template>

<script setup lang="ts">
import TagView from "../tagView/index.vue";
</script>

<style lang="scss" scoped>
$linear_gradient: linear-gradient(90deg, #fff 70%, #77e19d);
.display {
  display: flex;
  align-items: center;
}
.common-head {
  background: $linear_gradient;
  box-shadow: 0 2px 3px 0 rgb(0 0 0 / 30%);
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px solid #e4e7ed;

  &-left {
  }
  .collapse {
    padding: 0 10px 0 0;
  }
}
</style>
