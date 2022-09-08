<template>
  <SidebarFrame title="DB Manage">
    <template #DbNav>
      <DbNav></DbNav>
    </template>
    <template #DbObjects>
      <DbObjects></DbObjects>
    </template>
  </SidebarFrame>
</template>

<script setup>
import DbNav from './DbNav.vue'
import DbObjects from './DbObjects.vue'
</script>

<style scoped>

</style>