<template>
  <div class="sidebar-frame box-flex box-column">
    <div class="sidebar-header">
    </div>
    <div class="sidebar-body box-fill-height box-flex box-column">
      <div>
        <slot name="scrollbarTop"></slot>
      </div>

      <QScrollArea style="height: 100%;">
        <slot></slot>
      </QScrollArea>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar-frame {
  height: 100%;
  width: 100%;
}
</style>