<template>
  <pane :size="leftSidebarStore.width" v-if="leftSidebarStore.isOpen">
<!--    <QToolbar class="bg-grey-5 text-grey-9" style="height: 28px;min-height: 10px;">
      &lt;!&ndash;    <QBtn flat round dense icon="sym_o_menu" size="sm"/>&ndash;&gt;
      <QToolbarTitle>
        {{ activeSidebar.title }}
      </QToolbarTitle>
      <QBtn flat round dense icon="sym_o_remove" size="sm" @click="leftSidebarStore.isOpen = false"/>
    </QToolbar>-->
    <SidebarFrame isHorizontal :sidebarStore="leftSidebarStore">
      <splitpanes horizontal="isHorizontal">
        <pane>
          <slot name="DbNav"></slot>
        </pane>
        <pane>
          <slot name="DbObjects"></slot>
        </pane>
      </splitpanes>
    </SidebarFrame>

  </pane>
</template>

<script setup>
import {defineProps} from 'vue';
import SidebarFrame from '/src/components/layout/SidebarFrame.vue';
import {userLeftSidebarStore} from '/src/store/sidebar/left-sidebar-store.js';

let leftSidebarStore = userLeftSidebarStore()
let activeSidebar =   leftSidebarStore.getActiveComponent
console.log(leftSidebarStore.title)
</script>

<style scoped>

</style>