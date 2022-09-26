<template>
  <pane ref="_paneRef" v-bind="$attrs" :class="_class">
    <slot></slot>
  </pane>
</template>

<script setup>
import {defineProps, defineExpose, inject, ref} from 'vue'

let props = defineProps({
  name: {
    required: true
  },
  closeFix: {
    default: false
  }
})

let _paneRef = ref()

defineExpose({
  closePane,openPane
})

let closePaneInject = inject("closePane");

let _class = ref("")

function closePane() {
  closePaneInject(props.name);
}


let openPaneInject = inject("openPane");
function openPane(size) {
  openPaneInject(props.name,size);
}

let registerPane = inject("registerPane");
registerPane({
  name: props.name,
  closeFix: props.closeFix,
  _ref: _paneRef,
  _class: _class
})


</script>

<style scoped>

</style>