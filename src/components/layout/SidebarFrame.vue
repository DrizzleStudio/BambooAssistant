<template>
  <PaneR ref="paneRef" :size="sidebarStore[sizeKey]" :name="name">
    <splitpanes horizontal>
      <SidebarItemFrame v-for="(activeComponentKey) in activeComponentList"
                        :key="activeComponentKey"
                        :activeComponent="componentAll[activeComponentKey]"
                        @close="closeItem"
      ></SidebarItemFrame>
    </splitpanes>
  </PaneR>
</template>

<script setup>
import {defineProps, defineEmits, ref, defineExpose, computed} from 'vue';
import componentAll from '/src/components/component-all.js'
import SidebarItemFrame from '/src/components/layout/SidebarItemFrame.vue'

let props = defineProps({
  sidebarStore: {
    required: true
  },
  isHorizontal: {
    default: false,
    type: Boolean
  },
  sizeKey: {
    type: String,
    default: 'width'
  },
  name: {
    type: String,
    required: true
  }
})

let activeComponentList = computed(() => {
  let result = [].concat(props.sidebarStore.activeComponentListOne);
  result = result.concat(props.sidebarStore.activeComponentListTwo);
  return result;
})

let paneRef = ref()

function closeItem(id) {
  let activeComponentList = props.sidebarStore.activeComponentList;
  let index = activeComponentList.indexOf(id);
  activeComponentList.splice(index, 1);
  if (activeComponentList.length < 1) {
    paneRef.value.closePane();
  }
}

function getSize() {
  return props.sidebarStore[props.sizeKey];
}

</script>

<style scoped>

</style>