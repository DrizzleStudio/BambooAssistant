<template>
  <pane>

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
          <component :ref="(el)=>{
                          activeComponent.scrollbarTop.ref = el
                        }"
                     :is="activeComponent.scrollbarTop.name"
                     :sidebar-api="activeComponent"></component>
        </div>
        <QScrollArea style="height: 100%;">
          <component :ref="(el)=>{
                          activeComponent.scrollbarBody.ref = el
                        }"
                     :is="activeComponent.scrollbarBody.name"
                     :sidebar-api="activeComponent"></component>
        </QScrollArea>
      </div>
    </div>

  </pane>
</template>

<script setup>
import {ref, defineProps} from 'vue';

defineProps({
  activeComponent: {
    required: true
  }
})

</script>

<style scoped>
.sidebar-frame {
  height: 100%;
  width: 100%;
}
</style>