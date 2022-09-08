<template>
  <pane :size="leftSidebarStore.width" v-if="leftSidebarStore.isOpen">
    <QToolbar class="bg-grey-5 text-grey-9" style="height: 28px;min-height: 10px;">
      <!--    <QBtn flat round dense icon="sym_o_menu" size="sm"/>-->
      <QToolbarTitle>
        {{ activeSidebar.title }}
      </QToolbarTitle>
      <QBtn flat round dense icon="sym_o_remove" size="sm" @click="leftSidebarStore.isOpen = false"/>
    </QToolbar>

    <DatabaseManage></DatabaseManage>

  </pane>
</template>

<script setup>
import {defineProps} from 'vue'
import {userLeftSidebarStore} from '/src/store/sidebar/left-sidebar-store.js'

let leftSidebarStore = userLeftSidebarStore()
let activeSidebar =   leftSidebarStore.getActiveComponent
console.log(leftSidebarStore.title)
</script>

<style scoped>

</style>