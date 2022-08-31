<template>
  <div class="sidebar-top"></div>
  <div class="sidebar-body">
    <div>
      <slot name="scrollbarTop"></slot>
    </div>
    <el-scrollbar height="100px">
      <slot></slot>
    </el-scrollbar>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>