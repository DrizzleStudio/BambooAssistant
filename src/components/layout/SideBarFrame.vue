<template>
  <div class="sidebar-frame box-flex box-column">
    <QToolbar class="bg-grey-7 text-white" style="height: 28px;min-height: 10px;">
      <QBtn flat round dense icon="sym_o_menu" size="sm"/>
      <QToolbarTitle>
        {{ title }}
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
        <slot></slot>
      </QScrollArea>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue';

defineProps({
  title:{
    type:String,
    default: ()=>{
      return "";
    }
  }
})

</script>

<style scoped>
.sidebar-frame {
  height: 100%;
  width: 100%;
}
</style>