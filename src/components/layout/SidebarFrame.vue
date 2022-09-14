<template>
  <pane :size="sidebarStore.width" v-if="sidebarStore.isOpen">
    <splitpanes horizontal="isHorizontal">
      <pane>
        <slot name="DbNav"></slot>
      </pane>
      <pane>
        <slot name="DbObjects"></slot>
      </pane>
    </splitpanes>
  </pane>
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

</style>