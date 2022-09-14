<template>
  <splitpanes horizontal>
    <pane v-for="(activeComponent,index) in sidebarStore.activeComponentList">

      <div class="sidebar-frame box-flex box-column">
        <QToolbar class="bg-grey-5 text-grey-9" style="height: 28px;min-height: 10px;">
          <QBtn flat round dense icon="sym_o_menu" size="sm"/>
          <QToolbarTitle>
            {{ activeComponent.title }}
          </QToolbarTitle>
          <QBtn flat round dense icon="sym_o_more_vert" size="sm"/>
        </QToolbar>

        <div class="sidebar-header">
        </div>
        <div class="sidebar-body box-fill-height box-flex box-column">
          <div>
            <slot name="scrollbarTop"></slot>
          </div>
          <QScrollArea style="height: 100%;">
            <component :is="activeComponent.name"></component>
          </QScrollArea>
        </div>
      </div>

    </pane>
  </splitpanes>
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  sidebarStore: {
    required: true
  },
  isHorizontal: {
    default: false,
    type: Boolean
  }
})

</script>

<style scoped>

.sidebar-frame {
  height: 100%;
  width: 100%;
}

</style>