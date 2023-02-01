<template>
  <div class="tag-view">
    <el-tabs :tab-position="top">
      <el-tab-pane label="User"></el-tab-pane>
      <el-tab-pane label="Config"></el-tab-pane>
      <el-tab-pane label="Role"></el-tab-pane>
      <el-tab-pane label="Task"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.tag-view {
  background: #fff;
  width: 100%;
  display: flex;
}

.tags-view {
  .el-tabs--card :deep(.el-tabs__header) {
    box-sizing: border-box;
    height: 40px;
    padding: 0 10px;
    margin: 0;
  }
  :deep(.el-tabs) {
    .el-tabs__nav {
      border: none;
    }

    .el-tabs__header .el-tabs__item {
      border: none;
      color: #cccccc;
    }
    .el-tabs__header .el-tabs__item.is-active {
      color: --el-color-primary;
      border-bottom: 2px solid --el-color-primary;
    }
  }
}
:deep(.el-tabs__header) {
  margin: 0;
}
</style>
