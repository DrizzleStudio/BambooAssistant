<template>
  <splitpanes horizontal>
    <SidebarItemFrame v-for="(activeComponent,index) in sidebarStore.activeComponentList"
                      :activeComponent="componentAll[activeComponent]"
    ></SidebarItemFrame>
  </splitpanes>
</template>

<script setup>
import {defineProps} from 'vue';
import componentAll from '/src/components/component-all.js'

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