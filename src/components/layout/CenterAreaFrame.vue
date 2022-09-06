<template>
  <div class="sidebar-frame box-flex box-column" style="height: calc(100% - 40px)">
    <QToolbar class="bg-grey-3" style="height: 28px;min-height: 10px;">
      <QBtn flat round dense icon="sym_o_menu" size="sm"/>
      <QToolbarTitle>
        Sql Edit
      </QToolbarTitle>
      <QBtn flat round dense icon="sym_o_more_vert" size="sm"/>
    </QToolbar>

    <div class="scrollbar-top">
      <slot name="scrollbarTop"></slot>
    </div>

    <QScrollArea class="box-fill-height">
      <slot></slot>
    </QScrollArea>
  </div>
</template>

<script setup>
</script>

<style scoped>
:deep(.q-scrollarea__content){
  height: 100%;
}


</style>