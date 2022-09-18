<template>
  <pane>
    <div class="sidebar-frame-item box-flex box-column">
      <QToolbar class="bg-grey-5 text-grey-9" style="height: 28px;min-height: 10px;">
        <QBtn flat round dense icon="sym_o_menu" size="sm"/>
        <QToolbarTitle>
          {{ activeComponent.title }}
        </QToolbarTitle>
        <QBtn flat round dense icon="sym_o_more_vert" size="sm"/>
        <QBtn flat round dense icon="sym_o_remove" size="sm" @click="close"/>
      </QToolbar>

      <div class="sidebar-header">
      </div>
      <div class="sidebar-body box-fill-height box-flex box-column">
        <div>
          <component :ref="(el)=>{
                          activeComponent.scrollbarTop.ref = el
                        }"
                     :is="activeComponent.scrollbarTop.name"
          ></component>
        </div>
        <QScrollArea style="height: 100%;">
          <component :ref="(el)=>{
                          activeComponent.scrollbarBody.ref = el
                        }"
                     :is="activeComponent.scrollbarBody.name"
                     ></component>
        </QScrollArea>
      </div>
    </div>
  </pane>
</template>

<script setup>
import { ref, defineProps , defineEmits } from 'vue';

let props = defineProps({
  activeComponent: {
    required: true
  }
})

let emit = defineEmits(["close"])

function close(){
  emit("close",props.activeComponent.id)
}

</script>

<style scoped>
.sidebar-frame-item {
  height: 100%;
  width: 100%;
}
</style>