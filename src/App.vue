<!--
 * @Description: 
 * @Author: 帅
 * @Date: 2023-01-31 14:58:49
 * @LastEditors: 帅
 * @LastEditTime: 2023-01-31 16:08:51
-->
<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <el-config-provider namespace="ep">
    <RouterView />
  </el-config-provider>
</template>
