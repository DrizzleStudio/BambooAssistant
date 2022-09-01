<template>
  <div class="sidebar-top"></div>
  <div class="sidebar-body" style="height:50%">
    <div>
      <slot name="scrollbarTop"></slot>
    </div>
    <el-scrollbar height="100%">
      <slot></slot>
    </el-scrollbar>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>